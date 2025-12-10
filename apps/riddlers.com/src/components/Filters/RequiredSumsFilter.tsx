import { Label, ListBox, ListBoxItem } from 'react-aria-components'
import { comboStore, useComboStoreTracked } from '../../lib/ComboState'
import { sumCollection } from '../../lib/constants'

export function RequiredSumsFilter() {
  const requiredSums = useComboStoreTracked().sums()
  const requiredSumsString = useComboStoreTracked().requiredSumsString()
  const { onSumsSelectionChange, clearRequiredSums } = comboStore.set

  const id = 'required-sums-label'
  return (
    <div className="collapse-arrow collapse rounded-none">
      <input type="checkbox" />
      <Label id={id} className="btn collapse-title">
        Required sums:{' '}
        {requiredSumsString ? (
          <span className="text-success">{requiredSumsString}</span>
        ) : (
          <span className="text-gray-400">None selected</span>
        )}
      </Label>
      <div className="collapse-content bg-base-100 mt-2 flex flex-col gap-2 rounded-lg p-0">
        <ListBox
          aria-labelledby={id}
          layout="grid"
          items={sumCollection}
          selectedKeys={requiredSums}
          onSelectionChange={onSumsSelectionChange}
          selectionMode="multiple"
          className="grid grid-cols-[repeat(auto-fit,minmax(48px,1fr))]"
        >
          {(item) => (
            <ListBoxItem
              textValue={item.name}
              className="btn btn-sm selected:btn-success btn-square w-full ring-offset-2"
            >
              {item.name}
            </ListBoxItem>
          )}
        </ListBox>
        <button
          type="button"
          disabled={!requiredSums.length}
          onClick={() => clearRequiredSums()}
          className="btn btn-error"
        >
          Clear
        </button>
      </div>
    </div>
  )
}
