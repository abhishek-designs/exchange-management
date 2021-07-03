export interface Origin {
  title: string;
  img: string;
}

export interface Timestamp {
  date: string;
  time: string;
}

export interface Notification {
  id: number;
  msg: string;
  origin: Origin;
  timestamp: Timestamp;
  type: string;
  status: string;
  isAttended: boolean;
}

export interface Approval {
  id: number;
  approval: {
    msg: string;
    msgFor: string;
  };
  applicant: Origin;
  initDate: string;
  remark: string;
  status: string;
  isApproved: boolean;
}

export interface TableHead {
  id: number;
  title: string;
  isSortable: boolean;
}
