import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  iconColor?: string;
  trend?: string;
  trendUp?: boolean;
  subtitle?: string;
}

export function MetricCard({ 
  title, 
  value, 
  icon: Icon, 
  iconColor = '#7B2CBF',
  trend, 
  trendUp,
  subtitle 
}: MetricCardProps) {
  return (
    <div className="metric-card">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="caption text-gray-600 mb-1">{title}</p>
          <div className="metric-value">{value}</div>
          {trend && (
            <p className={`text-sm mt-2 flex items-center gap-1 ${trendUp ? 'text-green-600' : 'text-red-600'}`}>
              <span>{trendUp ? '↑' : '↓'}</span>
              {trend}
            </p>
          )}
          {subtitle && (
            <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
          )}
        </div>
        <div 
          className="w-12 h-12 rounded-full flex items-center justify-center"
          style={{ backgroundColor: `${iconColor}20` }}
        >
          <Icon size={24} style={{ color: iconColor }} />
        </div>
      </div>
    </div>
  );
}
