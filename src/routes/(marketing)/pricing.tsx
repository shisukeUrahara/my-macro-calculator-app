import { createFileRoute } from "@tanstack/react-router"
import { Button } from "~/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card"
import GradientOrb from "~/components/gradient-orb"

export const Route = createFileRoute("/(marketing)/pricing")({
  component: RouteComponent
})

function RouteComponent() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <GradientOrb className="-translate-x-1/2 absolute top-0 left-1/2 z-[-1] transform" />
      
      {/* Hero Section */}
      <section className="container relative z-0 mx-auto flex flex-col items-center px-4 pt-20 text-center md:pt-32">
        <div className="max-w-4xl">
          <h1 className="font-medium text-4xl text-foreground md:text-6xl lg:text-7xl mb-6">
            Simple, transparent pricing
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto">
            Choose the perfect plan for your needs. Start free, scale as you grow.
          </p>
          <p className="mt-4 text-muted-foreground text-xs uppercase tracking-wider">
            No hidden fees • Cancel anytime • 14-day money-back guarantee
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          
          {/* Starter Tier */}
          <Card className="relative border-2 hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Starter</CardTitle>
              <CardDescription>Perfect for individuals getting started</CardDescription>
              <div className="mt-4">
                <div className="text-3xl font-bold">Free</div>
                <div className="text-sm text-muted-foreground">Forever</div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  <span className="text-sm">Up to 5 projects</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  <span className="text-sm">Basic analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  <span className="text-sm">Community support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  <span className="text-sm">1GB storage</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">Get Started Free</Button>
            </CardFooter>
          </Card>

          {/* Pro Tier - Popular */}
          <Card className="relative border-2 border-primary shadow-lg hover:shadow-xl transition-shadow">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-medium">
                Most Popular
              </div>
            </div>
            <CardHeader className="text-center pt-8">
              <CardTitle className="text-xl">Pro</CardTitle>
              <CardDescription>For growing teams and businesses</CardDescription>
              <div className="mt-4">
                <div className="text-3xl font-bold">$29</div>
                <div className="text-sm text-muted-foreground">per month</div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  <span className="text-sm">Unlimited projects</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  <span className="text-sm">Advanced analytics & reporting</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  <span className="text-sm">Priority support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  <span className="text-sm">50GB storage</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  <span className="text-sm">Team collaboration</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  <span className="text-sm">API access</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Start Pro Trial</Button>
            </CardFooter>
          </Card>

          {/* Enterprise Tier */}
          <Card className="relative border-2 hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Enterprise</CardTitle>
              <CardDescription>For large organizations with custom needs</CardDescription>
              <div className="mt-4">
                <div className="text-3xl font-bold">$99</div>
                <div className="text-sm text-muted-foreground">per month</div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  <span className="text-sm">Everything in Pro</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  <span className="text-sm">Unlimited storage</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  <span className="text-sm">24/7 dedicated support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  <span className="text-sm">Custom integrations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  <span className="text-sm">Advanced security features</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  <span className="text-sm">SLA guarantee</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">Contact Sales</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-20 bg-muted/20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Loved by teams worldwide</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our customers have to say about their experience with our platform
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <blockquote className="text-sm mb-4">
                "This platform has completely transformed how we manage our projects. The analytics are incredible and the support team is always there when we need them."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium">SJ</span>
                </div>
                <div>
                  <div className="font-medium text-sm">Sarah Johnson</div>
                  <div className="text-xs text-muted-foreground">CTO, TechCorp</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <blockquote className="text-sm mb-4">
                "We've tried many solutions, but nothing comes close to the ease of use and powerful features this platform offers. It's been a game-changer for our team."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium">MC</span>
                </div>
                <div>
                  <div className="font-medium text-sm">Michael Chen</div>
                  <div className="text-xs text-muted-foreground">Product Manager, StartupXYZ</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <blockquote className="text-sm mb-4">
                "The ROI we've seen since implementing this platform is remarkable. Our productivity has increased by 40% and our team loves using it every day."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium">ER</span>
                </div>
                <div>
                  <div className="font-medium text-sm">Emily Rodriguez</div>
                  <div className="text-xs text-muted-foreground">Director of Operations, GrowthCo</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Frequently asked questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our pricing and plans
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">Can I change plans at any time?</h3>
              <p className="text-sm text-muted-foreground">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate the billing accordingly.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">Is there a free trial for paid plans?</h3>
              <p className="text-sm text-muted-foreground">
                We offer a 14-day free trial for both Pro and Enterprise plans. No credit card required to start your trial.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
              <p className="text-sm text-muted-foreground">
                We accept all major credit cards, PayPal, and for Enterprise customers, we also offer invoicing and wire transfers.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">Do you offer refunds?</h3>
              <p className="text-sm text-muted-foreground">
                Yes, we offer a 14-day money-back guarantee. If you're not satisfied with our service, contact us for a full refund.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of teams who trust our platform to power their success
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="px-8">
              Start Your Free Trial
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              Schedule a Demo
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            No credit card required • Setup in 2 minutes
          </p>
        </div>
      </section>
    </div>
  )
}

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-green-600 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg
      className="w-4 h-4 text-yellow-400 fill-current"
      viewBox="0 0 24 24"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}