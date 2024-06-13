import { ERROR_MESSAGES, phoneRegex } from '@/constants'
import { differenceInYears, subMonths } from 'date-fns'

import { z } from 'zod'

export const generalEditStudentSystemSchema = z.object({
  fullName: z.string().readonly(),
  email: z.string().email().readonly(),
  status: z.enum(['active', 'inactive']),
  phone: z.string({ required_error: ERROR_MESSAGES.EM21 }).regex(phoneRegex, { message: ERROR_MESSAGES.EM27 }),
  dob: z
    .string({ required_error: ERROR_MESSAGES.EM16 })
    .refine((dob) => differenceInYears(new Date(), new Date(dob)) >= 18, {
      message: 'User must be at least 18 years old'
    }),
  gender: z.enum(['Male', 'Female']),
  address: z.string().min(3, { message: ERROR_MESSAGES.EM15 }).max(80, { message: ERROR_MESSAGES.EM15 }),
  area: z.string()
})

export const generalEditStudentClassSchema = z.object({
  id: z.string().readonly(),
  fullName: z.string().readonly(),
  email: z.string().email().readonly(),
  attendingStatus: z.enum(['inclass', 'dropout', 'finished', 'reserve', 'deleted']),
  phone: z.string({ required_error: ERROR_MESSAGES.EM21 }).regex(phoneRegex, { message: ERROR_MESSAGES.EM27 }),
  dob: z
    .string({ required_error: ERROR_MESSAGES.EM16 })
    .refine((dob) => differenceInYears(new Date(), new Date(dob)) >= 18, {
      message: 'User must be at least 18 years old'
    }),
  gender: z.enum(['Male', 'Female']),
  address: z.string().min(3, { message: ERROR_MESSAGES.EM15 }).max(80, { message: ERROR_MESSAGES.EM15 }),
  certificationStatus: z.string().optional().nullable(),
  certificationDate: z.string().optional().nullable(),
  area: z.string()
})

export const othersStudentSchema = z.object({
  school: z.string(),
  major: z.string(),
  yearOfGraduation: z
    .string()
    .refine(
      (yearOfGraduation) => {
        return differenceInYears(new Date(yearOfGraduation), new Date()) >= 4
      },
      {
        message: 'Must be at least 4 years from now'
      }
    )
    .optional()
    .nullable(),
  gpa: z.coerce
    .number({ invalid_type_error: ERROR_MESSAGES.EM17 })
    .min(0, { message: ERROR_MESSAGES.EM28 })
    .max(4, { message: ERROR_MESSAGES.EM28 }),
  recer: z
    .string({ invalid_type_error: ERROR_MESSAGES.EM29, required_error: ERROR_MESSAGES.EM26 })
    .min(3, { message: ERROR_MESSAGES.EM26 })
    .max(30, { message: ERROR_MESSAGES.EM26 })
})

export const addStudentSystemSchema = z.object({
  fullName: z.string({ required_error: ERROR_MESSAGES.EM18 }),
  email: z.string({ required_error: ERROR_MESSAGES.EM19 }).email(),
  phone: z.string({ required_error: ERROR_MESSAGES.EM21 }).regex(phoneRegex, { message: ERROR_MESSAGES.EM27 }),
  dob: z
    .string({ required_error: ERROR_MESSAGES.EM16 })
    .refine((dob) => differenceInYears(new Date(), new Date(dob)) >= 18, {
      message: 'User must be at least 18 years old'
    }),
  gender: z.enum(['Male', 'Female'], { required_error: ERROR_MESSAGES.EM20 }),
  address: z
    .string({ required_error: ERROR_MESSAGES.EM22 })
    .min(3, { message: ERROR_MESSAGES.EM15 })
    .max(80, { message: ERROR_MESSAGES.EM15 }),
  area: z.string({ required_error: ERROR_MESSAGES.EM23 }),
  school: z.string({ required_error: ERROR_MESSAGES.EM24 }),
  major: z.string({ required_error: ERROR_MESSAGES.EM25 }),
  graduatedDate: z.string().refine(
    (graduatedDate) => {
      return differenceInYears(new Date(graduatedDate), new Date()) >= 4
    },
    {
      message: 'Must be at least 4 years from now'
    }
  ),
  gpa: z.coerce
    .number({ invalid_type_error: ERROR_MESSAGES.EM17 })
    .min(0, { message: ERROR_MESSAGES.EM28 })
    .max(4, { message: ERROR_MESSAGES.EM28 })
    .optional(),
  recer: z
    .string({ invalid_type_error: ERROR_MESSAGES.EM29, required_error: ERROR_MESSAGES.EM26 })
    .min(3, { message: ERROR_MESSAGES.EM26 })
    .max(30, { message: ERROR_MESSAGES.EM26 })
})

export const addStudentClassSchema = z.object({
  classId: z.string(),
  studentId: z.string()
})

export const addReserveStudentSchema = z.object({
  id: z.string({ required_error: ERROR_MESSAGES.EM48 }),
  programName: z.string().nonempty(ERROR_MESSAGES.EM37),
  classID: z.string().nonempty(ERROR_MESSAGES.EM36),
  reason: z.string({ required_error: ERROR_MESSAGES.EM38 }),
  reservePeriod: z
    .array(z.string())
    .length(2)
    .nonempty({})
    .refine(
      (value) => {
        const from = new Date(value[0])
        const to = new Date(value[1])
        return from <= to
      },
      { message: ERROR_MESSAGES.EM49 }
    )
    .refine(
      (value) => {
        const from = new Date(value[0])
        const to = new Date(value[1])
        const maxEndDate = subMonths(from, -6)
        return to <= maxEndDate
      },
      { message: ERROR_MESSAGES.EM50 }
    )
})

export const editStudentScoreSchema = z.record(
  z.union([
    z.number(),
    z.null(),
    z.string().refine((value) => !isNaN(Number(value)) && Number(value) >= 0 && Number(value) <= 10)
  ])
)

export const createEmailTemplateSchema = z.object({
  emailName: z.string({ required_error: ERROR_MESSAGES.EM19 }),
  emailDescription: z.string({ required_error: ERROR_MESSAGES.EM41 }),
  recipient: z.string({ required_error: ERROR_MESSAGES.EM42 }),
  category: z.string({ required_error: ERROR_MESSAGES.EM43 })
})

export const editProfileTemplateSchema = z.object({
  fullName: z
    .string()
    .min(5, { message: ERROR_MESSAGES.EM45 })
    .max(40, { message: ERROR_MESSAGES.EM45 })
    .refine((value) => isNaN(Number(value)), { message: ERROR_MESSAGES.EM3 }),
  email: z.string({ required_error: ERROR_MESSAGES.EM19 }).email(),
  address: z
    .string({ required_error: ERROR_MESSAGES.EM22 })
    .min(3, { message: ERROR_MESSAGES.EM15 })
    .max(80, { message: ERROR_MESSAGES.EM15 }),
  gender: z.enum(['Male', 'Female'], { required_error: ERROR_MESSAGES.EM20 }),
  dob: z.string({ required_error: ERROR_MESSAGES.EM16 }),
  phone: z.string({ required_error: ERROR_MESSAGES.EM21 }).regex(phoneRegex, { message: ERROR_MESSAGES.EM27 }),
  role: z.string().readonly(),
  username: z.string().readonly()
})
