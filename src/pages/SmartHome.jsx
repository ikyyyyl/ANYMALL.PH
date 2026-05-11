function SmartHome() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-teal-500">
        Smart Home
      </h1>
      <p className="text-gray-700 mb-6">
        Explore our range of smart home devices that make your life easier and more connected. From smart speakers to home automation systems, we have everything you need to create a smarter living space.
      </p>
        <div className="grid md:grid-cols-3 gap-5">
            <div className="border rounded-lg p-5 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition">
                <h2 className="font-bold text-gray-800">Smart Speaker X1</h2>
                <p className="text-sm text-gray-600 mt-2">Voice-controlled smart speaker with high-quality sound and smart home integration.</p>
            </div>
            <div className="border rounded-lg p-5 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition">
                <h2 className="font-bold text-gray-800">Home Automation Hub</h2>
                <p className="text-sm text-gray-600 mt-2">Centralized control for all your smart home devices with easy setup and compatibility.</p>
            </div>
            <div className="border rounded-lg p-5 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition">
                <h2 className="font-bold text-gray-800">Smart Thermostat Pro</h2>
                <p className="text-sm text-gray-600 mt-2">Energy-efficient thermostat with learning capabilities and remote control via app.</p>
            </div>
        </div>
    </div>
  );
}

export default SmartHome;