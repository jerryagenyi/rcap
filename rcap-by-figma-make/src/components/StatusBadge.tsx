import React from 'react';
import { Check, X, Clock, Send } from 'lucide-react';

interface StatusBadgeProps {
  status: 'draft' | 'submitted' | 'approved' | 'rejected';
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = {
    draft: {
      icon: Clock,
      label: 'Draft',
      className: 'status-badge status-draft'
    },
    submitted: {
      icon: Send,
      label: 'Submitted',
      className: 'status-badge status-submitted'
    },
    approved: {
      icon: Check,
      label: 'Approved',
      className: 'status-badge status-approved'
    },
    rejected: {
      icon: X,
      label: 'Rejected',
      className: 'status-badge status-rejected'
    }
  };

  const { icon: Icon, label, className } = config[status];

  return (
    <span className={className}>
      <Icon size={14} />
      {label}
    </span>
  );
}
