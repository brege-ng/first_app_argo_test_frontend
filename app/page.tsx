import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Bienvenue chez AutoDrive
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Votre partenaire de confiance pour trouver la voiture de vos rêves
            </p>
            <Link
              href="/register"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
            >
              Commencer votre recherche
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Qui sommes-nous ?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              AutoDrive est votre partenaire privilégié dans la recherche de votre prochaine voiture.
              Avec des années d'expérience dans l'industrie automobile, nous vous aidons à trouver
              le véhicule parfait qui correspond à vos besoins et à votre budget.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl mb-4">🚗</div>
              <h3 className="text-xl font-bold mb-3">Large Sélection</h3>
              <p className="text-gray-600">
                Accédez à un vaste catalogue de véhicules neufs et d'occasion
                pour tous les budgets et tous les besoins.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold mb-3">Accompagnement Personnalisé</h3>
              <p className="text-gray-600">
                Nos experts vous guident à chaque étape pour vous aider à faire
                le meilleur choix selon vos critères.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl mb-4">✓</div>
              <h3 className="text-xl font-bold mb-3">Garantie Qualité</h3>
              <p className="text-gray-600">
                Tous nos véhicules sont soigneusement vérifiés pour vous assurer
                une expérience d'achat en toute confiance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à trouver votre voiture idéale ?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Inscrivez-vous dès maintenant et laissez-nous vous aider dans votre recherche
          </p>
          <Link
            href="/register"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
          >
            S'inscrire maintenant
          </Link>
        </div>
      </section>
    </div>
  )
}
