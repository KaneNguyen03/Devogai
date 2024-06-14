import { QueryClient } from "@tanstack/react-query"

export const dateFormatList = ["YYYY-MM-DD", "DD-MM-YYYY"]

export const AUTHORITIES = {
  ADMIN: "ADMIN",
  TRAINER: "TRAINER",
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      retryDelay: 1000,
    },
  },
})

export const menuCategory = [
  {
    id: 1,
    tag: "New-Arrivals",
  },
  {
    id: 2,
    tag: "T-shirts",
  },
]

// Mã code màu
export const THEME_CODES = {
  PRIMARY: "#2D3748",
  PRIMARY_HOVER: "#4F6181",
  ORANGE: "#D45B13",
  GREEN: "#2F903F",
  FOREGROUND: "#EDF2F7",
  UNACTIVE: "#65748C",
}
// Regex số điện thoại VN
export const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g

export const PAGINATION = {
  PAGE_SIZE: 10,
  PAGE_NUM: 1,
  DEFAULT_SORT: "id",
  DEFAULT_SORT_DIR: "asc",
}
// Thông báo lỗi
export const ERROR_MESSAGES = {
  EM1: "The file format is incorrect",
  EM2: "The mandatory fields are missing",
}
