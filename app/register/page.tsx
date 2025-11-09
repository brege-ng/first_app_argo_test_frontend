'use client'

import { useState, useEffect } from 'react'

interface CarBuyer {
  id: number
  first_name: string
  last_name: string
  email: string
  phone: string
  desired_car_model: string
  budget: string | null
  additional_notes: string | null
  created_at: string
}

export default function Register() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL 
  // || 'http://localhost:4201/api'

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    desired_car_model: '',
    budget: '',
    additional_notes: '',
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })
  const [buyers, setBuyers] = useState<CarBuyer[]>([])
  const [loadingBuyers, setLoadingBuyers] = useState(true)

  const fetchBuyers = async () => {
    try {
      const response = await fetch(`${apiUrl}/car-buyers`, {
        headers: {
          'Accept': 'application/json',
        },
      })
      const data = await response.json()
      if (response.ok) {
        setBuyers(data.data || data)
      }
    } catch (error) {
      console.error('Erreur lors du chargement des inscrits:', error)
    } finally {
      setLoadingBuyers(false)
    }
  }

  useEffect(() => {
    fetchBuyers()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage({ type: '', text: '' })

    try {
      const response = await fetch(`${apiUrl}/car-buyers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage({ type: 'success', text: data.message || 'Inscription réussie !' })
        setFormData({
          first_name: '',
          last_name: '',
          email: '',
          phone: '',
          desired_car_model: '',
          budget: '',
          additional_notes: '',
        })
        // Recharger la liste des inscrits
        fetchBuyers()
      } else {
        const errorMessages = data.errors
          ? Object.values(data.errors).flat().join(', ')
          : 'Échec de l\'inscription. Veuillez réessayer.'
        setMessage({ type: 'error', text: errorMessages })
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Une erreur s\'est produite. Veuillez réessayer.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Inscription Acheteur
          </h1>
          <p className="text-lg text-gray-600">
            Remplissez le formulaire ci-dessous pour commencer votre recherche
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formulaire d'inscription */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Nouveau Client
            </h2>

            {message.text && (
              <div
                className={`mb-6 p-4 rounded-lg ${
                  message.type === 'success'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {message.text}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 mb-2">
                    Prénom
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="desired_car_model" className="block text-sm font-medium text-gray-700 mb-2">
                  Modèle de voiture souhaité
                </label>
                <input
                  type="text"
                  id="desired_car_model"
                  name="desired_car_model"
                  value={formData.desired_car_model}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                  Budget
                </label>
                <input
                  type="number"
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  min="0"
                  step="0.01"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="additional_notes" className="block text-sm font-medium text-gray-700 mb-2">
                  Notes additionnelles
                </label>
                <textarea
                  id="additional_notes"
                  name="additional_notes"
                  value={formData.additional_notes}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 px-4 rounded-lg text-white font-semibold transition-colors ${
                  loading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {loading ? 'Envoi en cours...' : 'S\'inscrire'}
              </button>
            </form>
          </div>

          {/* Liste des inscrits */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Clients Inscrits ({buyers.length})
            </h2>

            {loadingBuyers ? (
              <div className="text-center py-8">
                <p className="text-gray-600">Chargement...</p>
              </div>
            ) : buyers.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-600">Aucun client inscrit pour le moment</p>
              </div>
            ) : (
              <div className="space-y-4 max-h-[800px] overflow-y-auto">
                {buyers.map((buyer) => (
                  <div key={buyer.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg text-gray-900">
                        {buyer.first_name} {buyer.last_name}
                      </h3>
                      <span className="text-sm text-gray-500">
                        #{buyer.id}
                      </span>
                    </div>
                    <div className="space-y-1 text-sm">
                      <p className="text-gray-700">
                        <span className="font-medium">Email:</span> {buyer.email}
                      </p>
                      <p className="text-gray-700">
                        <span className="font-medium">Téléphone:</span> {buyer.phone}
                      </p>
                      <p className="text-gray-700">
                        <span className="font-medium">Modèle souhaité:</span> {buyer.desired_car_model}
                      </p>
                      {buyer.budget && (
                        <p className="text-gray-700">
                          <span className="font-medium">Budget:</span> {parseFloat(buyer.budget).toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}
                        </p>
                      )}
                      {buyer.additional_notes && (
                        <p className="text-gray-700">
                          <span className="font-medium">Notes:</span> {buyer.additional_notes}
                        </p>
                      )}
                      <p className="text-gray-500 text-xs mt-2">
                        Inscrit le: {new Date(buyer.created_at).toLocaleDateString('fr-FR')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
