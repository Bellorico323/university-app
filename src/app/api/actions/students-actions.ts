'use server'

import { StudentSearchParams } from '@/app/ui/students/table'
import { prisma } from '@/services/database'
import { Prisma, Student } from '@prisma/client'
import { unstable_noStore as noStore, revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

const ITEMS_PER_PAGE = 7

export async function fetchStudentsCount() {
  noStore()
  try {
    const count = await prisma.student.count()
    return count
  } catch (error) {
    console.error('Database Error:', error)
    // throw new Error('Failed to fetch total number of students.')
  }
}

interface StudentResponse {
  id: string
  name: string
  email: string
  registration: string
  phone: string
  cpf: string
  course: string
  createdAt: Date
}

export async function fetchFilteredStudents(
  query: StudentSearchParams,
  currentPage: number,
): Promise<StudentResponse[]> {
  // noStore()
  const offset = (currentPage - 1) * ITEMS_PER_PAGE

  await prisma.$connect()

  const students: StudentResponse[] = await prisma.$queryRaw`
        SELECT
        s.id,
        s.name,
        s.email,
        s.registration,
        s.phone,
        s.cpf,
        c.name as course,
        s."createdAt"
    FROM students s
    LEFT JOIN
        courses c ON c.id = s."courseId"
    WHERE
        (s.name LIKE '%' || ${query.name} || '%' OR ${query.name} IS NULL) AND
        (c.name LIKE '%' || ${query.course} || '%' OR ${query.course} IS NULL) AND
        (s.registration LIKE '%' || ${query.registration} || '%' OR ${query.registration} IS NULL)
      ORDER BY s."createdAt" DESC
    LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
  `

  await prisma.$disconnect()
  return students
}

export async function fetchStudentById(id: string): Promise<Student | null> {
  // noStore()
  const student = await prisma.student.findUnique({
    where: {
      id,
    },
  })

  return student
}

export async function createStudent(data: Prisma.StudentUncheckedCreateInput) {
  try {
    await prisma.student.create({
      data,
    })

    revalidatePath('/students')
    redirect('/students')
  } catch (error) {
    console.error('Database Error:', error)
  }
}

interface UpdateStudentRequest {
  id: string
  data: Prisma.StudentUncheckedUpdateInput
}

export async function updateStudent({ id, data }: UpdateStudentRequest) {
  try {
    await prisma.student.update({
      data: {
        name: data.name,
        email: data.email,
        phone: data.email,
        cpf: data.cpf,
        courseId: data.courseId,
      },
      where: {
        id,
      },
    })
    revalidatePath('/students')
  } catch (error) {
    console.error('Database Error:', error)
  }
}

export async function deleteStudent(id: string) {
  try {
    await prisma.student.delete({
      where: {
        id,
      },
    })

    revalidatePath('/students')
  } catch (error) {
    console.error('Database Error:', error)
  }
}
