export type User = {
  id: number,
  first_name: string,
  second_name: string,
  login: string,
  email: string,
  display_name?: string,
  phone?: string,
  avatar?: string
}

export type Resource = {
  id: number,
  user_id: number,
  path: string,
  filename: string,
  content_type: string,
  content_size: number,
  upload_date: Date
}
