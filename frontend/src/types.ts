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

export interface Exchange {
  id: number;
  itemImg: string;
  nameType: {
    name: string;
    type: string;
    location: string;
  };
  serialNo: string;
  purchaseDate: string;
  quantity: number;
  status: string;
  operator: Origin;
}

export interface Disposal {
  id: number;
  itemImg: string;
  nameType: {
    name: string;
    type: string;
    itemId: string;
  };
  operator: Origin;
  initDate: string;
  quantity: number;
  status: string;
}

export interface OperatorItem {
  itemId: number;
  itemImg: string;
  nameType: {
    name: string;
    type: string;
  };
  serialNo: string;
  purchaseDate: string;
  quantity: number;
  status: {
    activeStatus: number;
    inactiveStatus?: number;
  };
  itemChecked: boolean;
}

export interface Operator {
  id: number;
  title: string;
  logo: string;
  itemsNo: number;
  movableNo: number;
  nonMovableNo: number;
  tableDesc: OperatorItem[];
}

export interface Item {
  id: number;
  itemImg: string;
  title: string;
  itemNo: string;
  type: string;
  mobility: string;
  description: string;
  checked: boolean;
}

export interface TableHead {
  id: number;
  title: string;
  isSortable: boolean;
}
