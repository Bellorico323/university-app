'use client'
import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { Button } from '../Button'
import { Trash2 } from 'lucide-react'
import { deleteStudent } from '@/app/api/actions/students-actions'
import { useState } from 'react'

interface DeleteDialogProps {
  studentId: string
}

export function DeleteDialog({ studentId }: DeleteDialogProps) {
  const [dialogState, setDialogState] = useState(false)

  async function handleDeleteStudent() {
    await deleteStudent(studentId).then(() => {
      setDialogState(false)
    })
  }

  return (
    <>
      <AlertDialog.Root
        open={dialogState}
        onOpenChange={() => setDialogState(true)}
      >
        <AlertDialog.Trigger asChild>
          <Button variant="outline" className="p-3">
            <Trash2 className="h-4 w-4" />
          </Button>
        </AlertDialog.Trigger>
        <AlertDialog.Portal>
          <AlertDialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-black bg-opacity-40" />
          <AlertDialog.Content className="data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-neutral-900 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
            <AlertDialog.Title className="m-0 text-[17px] font-medium text-white">
              Deletar estudante
            </AlertDialog.Title>
            <AlertDialog.Description className="mb-5 mt-4 text-[15px] leading-normal text-neutral-400">
              Você tem certeza que deseja deletar esse estudante, após essa ação
              todos os dados desse estudante serão perdidos.
            </AlertDialog.Description>
            <div className="flex justify-end gap-[25px]">
              <AlertDialog.Cancel asChild>
                <Button
                  variant="ghost"
                  className="px-4 py-3 hover:bg-neutral-800"
                >
                  Cancelar
                </Button>
              </AlertDialog.Cancel>
              <AlertDialog.Action asChild>
                <Button
                  className="bg-rose-800 px-4 py-3 hover:bg-rose-600"
                  variant="primary"
                  onClick={() => handleDeleteStudent()}
                >
                  Deletar
                </Button>
              </AlertDialog.Action>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    </>
  )
}
