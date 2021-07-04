export interface Origin {
  title: string;
  img: string;
}

export interface Timestamp {
  date: string;
  time: string;
}

// export interface Dashboard {
//   id: number;
//   section: {
//     title: string;
//     icon: string;
//     total: string;

//   }

// }

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

export interface Task {
  id: number;
  task: {
    msg: string;
    msgFor: string;
  };
  taskNo: string;
  initDate: string;
  description: string;
  status: string;
  isCompleted: boolean;
  assigner: string;
}

export interface Inventory {
  id: number;
  nameType: {
    itemId: string;
    name: string;
    type: string;
  };
  operator: Origin;
  ivPsc: string;
  stock: string;
  costDollar: number;
  costNigerian: number;
  quantity: number;
  status: {
    acitve: number;
    inactive: number;
  };
  checked: boolean;
}

export interface TableHead {
  id: number;
  title: string;
  isSortable: boolean;
}
