"use client";

import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  Bar,
  BarChart,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type JobDetailsGraphsProps = {
  variant?: "standalone" | "embedded";
  title?: string;
  subtitle?: string;
  showHeader?: boolean;
};

// Helper function to format cost
const formatCost = (cents: number) => {
  return `$${(cents / 100).toFixed(2)}`;
};

// Generate dummy utilization data
// Using fixed base date to avoid hydration mismatch
const FIXED_BASE_DATE = new Date("2025-11-06T21:00:00Z");

const generateUtilizationData = () => {
  const data = [];
  const startTime = new Date(FIXED_BASE_DATE);
  startTime.setMinutes(startTime.getMinutes() - 60);

  for (let i = 0; i < 60; i++) {
    const time = new Date(startTime);
    time.setMinutes(time.getMinutes() + i);
    data.push({
      time: time.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      memory: Math.random() * 4 + 12,
      utilization: Math.random() * 20 + 70,
      temperature: Math.random() * 10 + 65,
      power: Math.random() * 50 + 250,
    });
  }
  return data;
};

// Generate dummy cost breakdown data
// A100: 4.8 hours total (2.5 + 2.3) at $0.55/h = $2.64 = 264 cents
// H100: 1.8 hours at $1.60/h = $2.88 = 288 cents
// Total: $5.52 = 552 cents
const generateCostBreakdownData = () => {
  const a100TotalCents = Math.round(4.8 * 55); // 4.8h * $0.55/h
  const h100TotalCents = Math.round(1.8 * 160); // 1.8h * $1.60/h
  const totalCostCents = a100TotalCents + h100TotalCents;

  return {
    totalCostCents: totalCostCents, // ~$5.52
    gpuTypeData: [
      {
        name: "A100",
        value: a100TotalCents,
        formatted: formatCost(a100TotalCents),
      },
      {
        name: "H100",
        value: h100TotalCents,
        formatted: formatCost(h100TotalCents),
      },
    ],
    workerData: [
      {
        name: "Worker 0",
        cost: Math.round(2.5 * 55),
        formatted: formatCost(Math.round(2.5 * 55)),
      },
      {
        name: "Worker 1",
        cost: Math.round(2.3 * 55),
        formatted: formatCost(Math.round(2.3 * 55)),
      },
      {
        name: "Worker 2",
        cost: Math.round(1.8 * 160),
        formatted: formatCost(Math.round(1.8 * 160)),
      },
    ],
  };
};

// Generate dummy job metrics
// Total GPU hours: 2.5 + 2.3 + 1.8 = 6.6 hours
// Total cost: A100 (4.8h * $0.55) + H100 (1.8h * $1.60) = $2.64 + $2.88 = $5.52 = 552 cents
const generateJobMetrics = () => {
  const a100Hours = 4.8; // 2.5 + 2.3
  const h100Hours = 1.8;
  const totalCostCents =
    Math.round(a100Hours * 55) + Math.round(h100Hours * 160);

  return {
    totalGPUHours: 6.6,
    avgUtilization: 78.5,
    peakMemory: 16.2,
    checkpointsCount: 2,
    totalCostCents: totalCostCents,
    efficiencyScore: 85,
  };
};

// Generate dummy worker timeline data
// Using fixed base date to avoid hydration mismatch
// Pricing: A100 at $0.55/hour, H100 at $1.60/hour (below market rates)
const generateWorkerTimelineData = () => {
  const baseTime = FIXED_BASE_DATE.getTime();
  // A100: $0.55/hour = 55 cents/hour
  // H100: $1.60/hour = 160 cents/hour
  return [
    {
      id: "1",
      worker_rank: "0",
      gpu_type: "A100 (Boston, MA)",
      joined_at: new Date(baseTime - 2.5 * 60 * 60 * 1000).toISOString(),
      left_at: null,
      last_seen: new Date(baseTime).toISOString(),
      cost: Math.round(2.5 * 55), // 2.5h * $0.55/h = $1.375 = 138 cents
      duration: "2.5h",
      isActive: true,
    },
    {
      id: "2",
      worker_rank: "1",
      gpu_type: "A100 (Atlanta, GA)",
      joined_at: new Date(baseTime - 2.3 * 60 * 60 * 1000).toISOString(),
      left_at: null,
      last_seen: new Date(baseTime).toISOString(),
      cost: Math.round(2.3 * 55), // 2.3h * $0.55/h = $1.265 = 127 cents
      duration: "2.3h",
      isActive: true,
    },
    {
      id: "3",
      worker_rank: "2",
      gpu_type: "H100 (Alexandria, VA)",
      joined_at: new Date(baseTime - 1.8 * 60 * 60 * 1000).toISOString(),
      left_at: new Date(baseTime - 0.2 * 60 * 60 * 1000).toISOString(),
      last_seen: new Date(baseTime - 0.2 * 60 * 60 * 1000).toISOString(),
      cost: Math.round(1.8 * 160), // 1.8h * $1.60/h = $2.88 = 288 cents
      duration: "1.8h",
      isActive: false,
    },
  ];
};

// Generate dummy checkpoints data
// Using fixed base date to avoid hydration mismatch
const generateCheckpointsData = () => {
  const baseTime = FIXED_BASE_DATE.getTime();
  return [
    {
      id: "1",
      checkpoint_id: "ckpt_epoch_10_step_5000",
      epoch: "10",
      step: "5000",
      s3_key: "checkpoints/job_123/epoch_10_step_5000.pt",
      s3_bucket: "cumulus-checkpoints",
      file_size_bytes: "2147483648", // 2 GB
      created_at: new Date(baseTime - 1.5 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: "2",
      checkpoint_id: "ckpt_epoch_20_step_10000",
      epoch: "20",
      step: "10000",
      s3_key: "checkpoints/job_123/epoch_20_step_10000.pt",
      s3_bucket: "cumulus-checkpoints",
      file_size_bytes: "2147483648", // 2 GB
      created_at: new Date(baseTime - 0.8 * 60 * 60 * 1000).toISOString(),
    },
  ];
};

const COLORS = [
  "#3b82f6", // blue
  "#8b5cf6", // purple
  "#ec4899", // pink
  "#f59e0b", // amber
  "#10b981", // green
  "#ef4444", // red
  "#06b6d4", // cyan
];

const utilizationData = generateUtilizationData();
const costData = generateCostBreakdownData();
const jobMetrics = generateJobMetrics();
const workerTimelineData = generateWorkerTimelineData();
const checkpointsData = generateCheckpointsData();

export default function JobDetailsGraphs({
  variant = "standalone",
  title,
  subtitle,
  showHeader = true,
}: JobDetailsGraphsProps) {
  const isStandalone = variant === "standalone";

  const resolvedTitle =
    title ??
    (isStandalone ? "Real-Time Job Monitoring" : "Cumulus Console Snapshot");
  const resolvedSubtitle =
    subtitle ??
    (isStandalone
      ? "Track performance, costs, and resource utilization in real-time"
      : "Live metrics surface the moment your job begins running.");

  const outerClassName = isStandalone
    ? "relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black"
    : "";

  const innerClassName = isStandalone
    ? "max-w-7xl mx-auto"
    : "rounded-3xl border border-zinc-900/60 bg-black/60 backdrop-blur-sm p-6 sm:p-10 shadow-2xl";

  const headerClassName = isStandalone
    ? "text-center mb-16"
    : "mb-12 text-center lg:text-left";

  const contentWrapperClass = isStandalone ? "space-y-6" : "space-y-5";

  const cardBaseClasses = `${
    isStandalone
      ? "bg-black border border-zinc-800"
      : "bg-black/85 border border-zinc-900/70 backdrop-blur"
  } rounded-xl p-6 shadow-lg`;

  return (
    <div className={outerClassName}>
      <div className={`${innerClassName}`}>
        {showHeader && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className={headerClassName}
          >
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-2">
              {resolvedTitle}
            </h2>
            <p className="text-sm text-gray-500 max-w-xl mx-auto lg:mx-0">
              {resolvedSubtitle}
            </p>
          </motion.div>
        )}

        <div className={contentWrapperClass}>
          {/* Job Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className={cardBaseClasses}
          >
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-white mb-1">
                Key Metrics
              </h3>
              <p className="text-sm text-zinc-500">
                Performance and cost metrics
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                {
                  label: "Total GPU Hours",
                  value: jobMetrics.totalGPUHours.toFixed(2),
                  unit: "hours",
                },
                {
                  label: "Avg GPU Utilization",
                  value: jobMetrics.avgUtilization.toFixed(1),
                  unit: "%",
                },
                {
                  label: "Peak Memory Usage",
                  value: jobMetrics.peakMemory.toFixed(2),
                  unit: "GB",
                },
                {
                  label: "Checkpoints Saved",
                  value: jobMetrics.checkpointsCount.toString(),
                  unit: "",
                },
                {
                  label: "Cost per GPU-Hour",
                  value: formatCost(
                    jobMetrics.totalGPUHours > 0
                      ? jobMetrics.totalCostCents / jobMetrics.totalGPUHours
                      : 0
                  ),
                  unit: "",
                },
                {
                  label: "Efficiency Score",
                  value: jobMetrics.efficiencyScore.toFixed(0),
                  unit: "/100",
                },
              ].map((metric) => (
                <div
                  key={metric.label}
                  className="bg-zinc-900 border border-zinc-800 rounded-lg p-4"
                >
                  <div className="text-zinc-500 text-sm mb-1">
                    {metric.label}
                  </div>
                  <div className="text-white text-2xl font-bold">
                    {metric.value}
                    {metric.unit && (
                      <span className="text-zinc-600 text-lg ml-1">
                        {metric.unit}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Cost Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className={cardBaseClasses}
          >
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-white mb-1">
                Cost Breakdown
              </h3>
              <p className="text-sm text-zinc-500">Detailed cost analysis</p>
            </div>
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-zinc-400 text-sm mb-1">Total Cost</div>
                <div className="text-4xl font-bold text-white">
                  {formatCost(costData.totalCostCents)}
                </div>
              </div>

              {costData.gpuTypeData.length > 0 && (
                <div>
                  <h4 className="text-white font-semibold mb-4">
                    Cost by GPU Type
                  </h4>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={costData.gpuTypeData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, formatted }) => `${name}: ${formatted}`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {costData.gpuTypeData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(value: number) => formatCost(Number(value))}
                      />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              )}

              {costData.workerData.length > 0 && (
                <div>
                  <h4 className="text-white font-semibold mb-4">
                    Cost per Worker
                  </h4>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={costData.workerData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis
                        dataKey="name"
                        stroke="#9ca3af"
                        style={{ fontSize: "12px" }}
                      />
                      <YAxis
                        stroke="#9ca3af"
                        style={{ fontSize: "12px" }}
                        tickFormatter={(value) =>
                          `$${(Number(value) / 100).toFixed(0)}`
                        }
                      />
                      <Tooltip
                        formatter={(value: number) => formatCost(Number(value))}
                        contentStyle={{
                          backgroundColor: "#18181b",
                          border: "1px solid #3f3f46",
                          borderRadius: "8px",
                        }}
                      />
                      <Bar
                        dataKey="cost"
                        fill="#3b82f6"
                        radius={[8, 8, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              )}
            </div>
          </motion.div>

          {/* Utilization Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className={cardBaseClasses}
          >
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-white mb-1">
                GPU Utilization
              </h3>
              <p className="text-sm text-zinc-500">
                Monitor Health and Performance
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-white font-semibold mb-4">
                  Utilization & Memory
                </h4>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={utilizationData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis
                      dataKey="time"
                      stroke="#9ca3af"
                      style={{ fontSize: "12px" }}
                    />
                    <YAxis
                      yAxisId="left"
                      stroke="#9ca3af"
                      style={{ fontSize: "12px" }}
                      label={{ value: "%", angle: -90, position: "insideLeft" }}
                    />
                    <YAxis
                      yAxisId="right"
                      orientation="right"
                      stroke="#9ca3af"
                      style={{ fontSize: "12px" }}
                      label={{
                        value: "GB",
                        angle: 90,
                        position: "insideRight",
                      }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#18181b",
                        border: "1px solid #3f3f46",
                        borderRadius: "8px",
                      }}
                    />
                    <Legend />
                    <Line
                      yAxisId="left"
                      type="monotone"
                      dataKey="utilization"
                      stroke="#3b82f6"
                      name="Utilization %"
                      strokeWidth={2}
                    />
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="memory"
                      stroke="#8b5cf6"
                      name="Memory (GB)"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>

          {/* Worker Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className={cardBaseClasses}
          >
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-white mb-1">
                Worker Timeline
              </h3>
              <p className="text-sm text-zinc-500">
                Worker lifecycle and costs
              </p>
            </div>
            {workerTimelineData.length === 0 ? (
              <div className="text-zinc-400 text-center py-8">
                No worker data available
              </div>
            ) : (
              <div className="space-y-3">
                {workerTimelineData.map((worker) => {
                  const isActive = worker.isActive;

                  return (
                    <div
                      key={worker.id}
                      className={`bg-zinc-900 border rounded-lg p-4 ${
                        isActive
                          ? "border-green-500/50 bg-green-900/10"
                          : "border-zinc-800"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-2">
                            <span className="text-white font-semibold">
                              Worker {worker.worker_rank || "—"}
                            </span>
                            {isActive && (
                              <span className="px-2 py-0.5 rounded-full text-xs bg-green-500/20 text-green-400">
                                Active
                              </span>
                            )}
                            {worker.gpu_type && (
                              <span className="text-zinc-500 text-sm">
                                {worker.gpu_type}
                              </span>
                            )}
                          </div>
                          <div className="text-sm text-zinc-500 space-y-1">
                            <div>Duration: {worker.duration}</div>
                            <div>
                              {worker.joined_at && (
                                <span>
                                  Joined:{" "}
                                  {new Date(worker.joined_at).toLocaleString()}
                                </span>
                              )}
                              {worker.left_at && (
                                <span className="ml-4">
                                  Left:{" "}
                                  {new Date(worker.left_at).toLocaleString()}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-zinc-500 text-sm mb-1">Cost</div>
                          <div className="text-white text-lg font-semibold">
                            {formatCost(worker.cost)}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </motion.div>

          {/* Checkpoints List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className={cardBaseClasses}
          >
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-white mb-1">
                Checkpoints
              </h3>
              <p className="text-sm text-zinc-500">Saved model checkpoints</p>
            </div>
            {checkpointsData.length === 0 ? (
              <div className="text-zinc-400 text-center py-8">
                No checkpoints saved yet
              </div>
            ) : (
              <div className="space-y-3">
                {checkpointsData.map((checkpoint) => {
                  const formatFileSize = (bytes: string | null) => {
                    if (!bytes) return "—";
                    const size = parseFloat(bytes);
                    if (size < 1024) return `${size} B`;
                    if (size < 1024 * 1024)
                      return `${(size / 1024).toFixed(2)} KB`;
                    if (size < 1024 * 1024 * 1024)
                      return `${(size / (1024 * 1024)).toFixed(2)} MB`;
                    return `${(size / (1024 * 1024 * 1024)).toFixed(2)} GB`;
                  };

                  const formatDate = (dateString: string | null) => {
                    if (!dateString) return "—";
                    return new Date(dateString).toLocaleString();
                  };

                  return (
                    <div
                      key={checkpoint.id}
                      className="bg-zinc-900 border border-zinc-800 rounded-lg p-4"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-2">
                            <span className="text-white font-semibold">
                              {checkpoint.checkpoint_id || checkpoint.id}
                            </span>
                            {checkpoint.epoch && (
                              <span className="text-zinc-500 text-sm">
                                Epoch: {checkpoint.epoch}
                              </span>
                            )}
                            {checkpoint.step && (
                              <span className="text-zinc-500 text-sm">
                                Step: {checkpoint.step}
                              </span>
                            )}
                          </div>
                          <div className="text-sm text-zinc-500 space-y-1">
                            <div>
                              Size: {formatFileSize(checkpoint.file_size_bytes)}
                            </div>
                            <div>
                              Created: {formatDate(checkpoint.created_at)}
                            </div>
                            {checkpoint.s3_bucket && checkpoint.s3_key && (
                              <div className="text-xs font-mono text-zinc-600">
                                s3://{checkpoint.s3_bucket}/{checkpoint.s3_key}
                              </div>
                            )}
                          </div>
                        </div>
                        {checkpoint.s3_key && (
                          <button
                            className="px-3 py-1.5 text-sm border-2 border-zinc-800 text-zinc-400 hover:bg-zinc-900 hover:text-white rounded-lg transition-colors"
                            onClick={() => {
                              // Placeholder for download
                            }}
                          >
                            Download
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
