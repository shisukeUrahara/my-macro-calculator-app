import * as React from 'react'
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Switch } from './ui/switch'

interface MacroResults {
  totalCalories: number
  protein: {
    grams: number
    calories: number
  }
  carbs: {
    grams: number
    calories: number
  }
  fats: {
    grams: number
    calories: number
  }
}

export function MacroCalculator() {
  const [unitSystem, setUnitSystem] = React.useState('metric')
  const [age, setAge] = React.useState('')
  const [gender, setGender] = React.useState('male')
  const [weight, setWeight] = React.useState('')
  const [height, setHeight] = React.useState('')
  const [feet, setFeet] = React.useState('')
  const [inches, setInches] = React.useState('')
  const [activityLevel, setActivityLevel] = React.useState('sedentary')
  const [results, setResults] = React.useState<MacroResults | null>(null)

  const handleCalculate = () => {
    const ageNum = parseInt(age)
    const weightNum = parseFloat(weight)
    let heightNum = parseFloat(height)

    if (unitSystem === 'imperial') {
      const feetNum = parseFloat(feet)
      const inchesNum = parseFloat(inches)
      heightNum = (feetNum * 12 + inchesNum) * 2.54
    }

    const weightInKg =
      unitSystem === 'metric' ? weightNum : weightNum / 2.20462

    // BMR Calculation (Mifflin-St Jeor)
    const bmr =
      10 * weightInKg + 6.25 * heightNum - 5 * ageNum + (gender === 'male' ? 5 : -161)

    // TDEE Calculation
    const activityFactors = {
      sedentary: 1.2,
      'lightly-active': 1.375,
      'moderately-active': 1.55,
      'very-active': 1.725,
      'super-active': 1.9,
    }
    const tdee = bmr * activityFactors[activityLevel]

    // Calorie Adjustment for Muscle Gain
    const targetCalories = tdee + 500

    // Macronutrient Calculation
    const proteinGrams = 2.2 * weightInKg
    const proteinCalories = proteinGrams * 4
    const fatCalories = targetCalories * 0.25
    const fatGrams = fatCalories / 9
    const carbCalories = targetCalories - proteinCalories - fatCalories
    const carbGrams = carbCalories / 4

    setResults({
      totalCalories: Math.round(targetCalories),
      protein: {
        grams: Math.round(proteinGrams),
        calories: Math.round(proteinCalories),
      },
      carbs: {
        grams: Math.round(carbGrams),
        calories: Math.round(carbCalories),
      },
      fats: {
        grams: Math.round(fatGrams),
        calories: Math.round(fatCalories),
      },
    })
  }

  const pieData = results
    ? [
        { name: 'Protein', value: results.protein.calories },
        { name: 'Carbs', value: results.carbs.calories },
        { name: 'Fats', value: results.fats.calories },
      ]
    : []

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28']

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Macro Calculator</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="flex items-center space-x-2">
          <Label htmlFor="unit-switch">Imperial</Label>
          <Switch
            id="unit-switch"
            checked={unitSystem === 'metric'}
            onCheckedChange={checked =>
              setUnitSystem(checked ? 'metric' : 'imperial')
            }
          />
          <Label htmlFor="unit-switch">Metric</Label>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="age">Age</Label>
            <Input
              id="age"
              placeholder="Enter your age"
              value={age}
              onChange={e => setAge(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Gender</Label>
            <RadioGroup
              defaultValue="male"
              className="flex items-center space-x-4"
              onValueChange={setGender}
              value={gender}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="male" id="male" />
                <Label htmlFor="male">Male</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="female" id="female" />
                <Label htmlFor="female">Female</Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="weight">
              Weight ({unitSystem === 'metric' ? 'kg' : 'lbs'})
            </Label>
            <Input
              id="weight"
              placeholder={`Enter your weight in ${
                unitSystem === 'metric' ? 'kg' : 'lbs'
              }`}
              value={weight}
              onChange={e => setWeight(e.target.value)}
            />
          </div>
          {unitSystem === 'metric' ? (
            <div className="space-y-2">
              <Label htmlFor="height">Height (cm)</Label>
              <Input
                id="height"
                placeholder="Enter your height in cm"
                value={height}
                onChange={e => setHeight(e.target.value)}
              />
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-2">
                <Label htmlFor="feet">Height (ft)</Label>
                <Input
                  id="feet"
                  placeholder="Feet"
                  value={feet}
                  onChange={e => setFeet(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="inches"> (in)</Label>
                <Input
                  id="inches"
                  placeholder="Inches"
                  value={inches}
                  onChange={e => setInches(e.target.value)}
                />
              </div>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="activity-level">Activity Level</Label>
          <Select onValueChange={setActivityLevel} value={activityLevel}>
            <SelectTrigger>
              <SelectValue placeholder="Select your activity level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sedentary">
                Sedentary (little or no exercise)
              </SelectItem>
              <SelectItem value="lightly-active">
                Lightly Active (light exercise/sports 1-3 days/week)
              </SelectItem>
              <SelectItem value="moderately-active">
                Moderately Active (moderate exercise/sports 3-5 days/week)
              </SelectItem>
              <SelectItem value="very-active">
                Very Active (hard exercise/sports 6-7 days a week)
              </SelectItem>
              <SelectItem value="super-active">
                Super Active (very hard exercise/physical job)
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button onClick={handleCalculate} className="w-full">
          Calculate
        </Button>

        {results && (
          <Card className="macro-results-card mt-6">
            <CardHeader>
              <CardTitle>Your Results</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="fancy-pie-chart">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-center">
                  Total Daily Calories: {results.totalCalories}
                </h3>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <p className="font-bold text-lg">
                      {results.protein.grams}g
                    </p>
                    <p className="text-sm text-muted-foreground">Protein</p>
                  </div>
                  <div>
                    <p className="font-bold text-lg">{results.carbs.grams}g</p>
                    <p className="text-sm text-muted-foreground">Carbs</p>
                  </div>
                  <div>
                    <p className="font-bold text-lg">{results.fats.grams}g</p>
                    <p className="text-sm text-muted-foreground">Fats</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  )
}
