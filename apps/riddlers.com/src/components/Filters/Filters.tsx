// oxlint-disable jsx-no-new-function-as-prop
import { clsx } from 'clsx'
import { useState } from 'react'
import { SvgCloseIcon } from '../Icons/SvgCloseIcon'
import { SvgFilterIcon } from '../Icons/SvgFilterIcon'
import { Options } from '../Options'
import { LengthFilter } from './LengthFilter'
import { RequiredNumbersFilter } from './RequiredNumbersFilter'
import { RequiredSumsFilter } from './RequiredSumsFilter'

export function Filters() {
  const [open, setOpen] = useState(false)
  return (
    <div
      className={clsx(
        'fixed inset-x-0 bottom-20 bg-white shadow-2xl duration-200',
        {
          'animate-in slide-in-from-bottom-full translate-y-full': !open,
          'animate-in slide-in-from-bottom-full translate-y-20': open,
        },
      )}
    >
      <div className="flex flex-col gap-4 rounded-none bg-white p-4 pb-12">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="btn btn-circle btn-success absolute top-4 right-4 text-white"
        >
          {open ? <SvgCloseIcon /> : <SvgFilterIcon />}
        </button>
        <Options />
        <LengthFilter />
        <RequiredNumbersFilter />
        <RequiredSumsFilter />
      </div>
    </div>
  )
}
