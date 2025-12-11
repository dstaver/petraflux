import { X as SvgClose } from 'lucide-react'
import { useEffect, useRef } from 'react'
import './Dialog.css'

export function Dialog({
  open,
  children,
  onClick,
  onClose,
  ...props
}: Omit<
  React.DetailedHTMLProps<
    React.DialogHTMLAttributes<HTMLDialogElement>,
    HTMLDialogElement
  >,
  'ref'
>) {
  const ref = useRef<HTMLDialogElement>(null)

  // Manage the dialog open/close state and document scroll locking
  useEffect(() => {
    const dialog = ref.current
    if (open && dialog?.open === false) {
      // Lock document scroll when dialog is open
      document.documentElement.classList.add('no-scroll')

      // Using showModal() instead of the open attribute to display the dialog
      // enables the ::backdrop pseudo-element
      // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog#usage_notes
      dialog.showModal()
    } else if (!open && dialog?.open === true) {
      dialog.close()
    }
    // Cleanup function to ensure dialog is closed and
    //  scroll is unlocked when the component unmounts
    return () => {
      dialog?.close()
      document.documentElement.classList.remove('no-scroll')
    }
  }, [open])

  return (
    <dialog
      ref={ref}
      onClick={(e) => {
        // Call any provided onClick handler
        onClick?.(e)
        // Close the dialog if the backdrop is clicked
        if (e.target === ref.current) {
          ref.current.close()
        }
      }}
      onClose={(e) => {
        // Call any provided onClose handler
        onClose?.(e)
        // Unlock document scroll when dialog is closed
        document.documentElement.classList.remove('no-scroll')
      }}
      {...props}
    >
      <form method="dialog">
        <button
          type="submit"
          aria-label="Lukk dialog"
          className="dialog__close"
        >
          <SvgClose />
        </button>
      </form>
      {open && children}
    </dialog>
  )
}
