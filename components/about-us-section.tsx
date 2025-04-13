import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutUsSection() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">About London Trading Index</h2>
            <p className="text-gray-600 mb-6">
              London Trading Index (LTI) is a premier proprietary trading firm established in 2019. We began as a
              trusted CFD broker and expanded into proprietary trading to offer traders worldwide the opportunity to
              access significant capital with favorable conditions.
            </p>
            <p className="text-gray-600 mb-6">
              Our unique hybrid model combines the stability of an established broker with innovative approaches to prop
              trading, creating an unparalleled experience for traders at all levels.
            </p>
            <div className="relative h-64 rounded-lg overflow-hidden mt-8">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
                alt="London Financial District"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <div className="relative h-64 rounded-lg overflow-hidden mb-8">
              <Image
                src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=1200&auto=format&fit=crop"
                alt="Trading Team"
                fill
                className="object-cover"
              />
            </div>
            <Card className="bg-gray-900 text-white border-none">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                <p className="mb-4">
                  To provide traders with the capital, tools, and support they need to succeed in the financial markets,
                  while maintaining the highest standards of transparency and integrity.
                </p>
                <h3 className="text-xl font-bold mb-4">Our Vision</h3>
                <p>
                  To become the leading proprietary trading firm globally, known for our innovative approach,
                  trader-centric policies, and consistent results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
