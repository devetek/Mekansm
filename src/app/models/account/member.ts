export interface Member {
  member_username: string;
  member_email: string;
  member_phone: string;
  member_fullname: string;
}

export interface Members {
  data: Member[];
  hasNext: boolean;
}
