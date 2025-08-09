import { createFileRoute } from '@tanstack/react-router'
import { MacroCalculator } from '~/components/macro-calculator'

export const Route = createFileRoute('/(marketing)/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="p-4">
      <MacroCalculator />
    </div>
  )
}
