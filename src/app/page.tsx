import React from "react";
import {
  MapPin,
  Coins,
  Camera,
  Users,
  Download,
  Smartphone,
  Globe,
  Zap,
  Target,
  Palette,
  Eye,
  ShoppingBag,
} from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16  rounded-lg flex items-center justify-center">
                <img
                  src="logo-03.png"
                  alt="WalkARCoin Features"
                  className="w-full h-auto object-cover "
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">WARC</h1>
                <p className="text-xs text-gray-500">WalkARCoin</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Características
              </a>
              <a
                href="#how-it-works"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Cómo funciona
              </a>
              <a
                href="#users"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Usuarios
              </a>
              <a
                href="https://drive.google.com/file/d/1wBGWYkrcFLrHShova90CUrdOb0mtnh0g/view?usp=drive_link"
                download="mi-app.apk"
                className="bg-gradient-to-r cursor-pointer from-[#E10071] via-[#E10071] to-[#E10071] text-white px-6 py-2 rounded-full hover:shadow-lg transition-all"
              >
                Descargar App
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 pt-20 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Avances que cambian
                  <span className="bg-gradient-to-r from-[#E10071] via-[#E10071] to-purple-600 bg-clip-text text-transparent block">
                    la vida de usuarios
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Descubre una nueva forma de vivir el mundo real con
                  recompensas en Web3. Con WalkARCoin, caminar se convierte en
                  una experiencia inmersiva donde ganas tokens, creas arte
                  digital y descubres NFTs en Realidad Aumentada.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://drive.google.com/file/d/1wBGWYkrcFLrHShova90CUrdOb0mtnh0g/view?usp=drive_link"
                  download="mi-app.apk"
                  className="bg-gradient-to-r from-[#E10071] via-[#E10071] to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2"
                >
                  <Smartphone className="w-5 h-5" />
                  <span>Descargar App</span>
                </a>
                <a
                  href="/white_paper.pdf"
                  target="_blank"
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all flex items-center justify-center space-x-2"
                >
                  <Download className="w-5 h-5" />
                  <span>Whitepaper</span>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#E10071] via-[#E10071] to-purple-500 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">
                        Explora. Camina. Gana.
                      </h3>
                      <p className="text-white/80 text-sm">
                        Recompensas por moverte
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white/20 rounded-lg p-3 text-center">
                      <Coins className="w-6 h-6 text-white mx-auto mb-1" />
                      <p className="text-white text-xs">Tokens</p>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3 text-center">
                      <Camera className="w-6 h-6 text-white mx-auto mb-1" />
                      <p className="text-white text-xs">NFTs AR</p>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3 text-center">
                      <Globe className="w-6 h-6 text-white mx-auto mb-1" />
                      <p className="text-white text-xs">Web3</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ¿Cómo funciona?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Con la app móvil de WalkARCoin puedes interactuar con el mundo
              real de manera completamente nueva
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#E10071] via-[#E10071] to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Camina y Recolecta
              </h3>
              <p className="text-gray-600">
                Camina hacia ubicaciones reales y recolecta tokens WARC. Cada
                paso cuenta en nuestro ecosistema gamificado.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 via-[#E10071] to-[#E10071] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Camera className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Crea NFTs Geolocalizados
              </h3>
              <p className="text-gray-600">
                Crea NFTs anclados a coordenadas GPS reales con imágenes,
                modelos 3D o audio únicos.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#E10071] via-[#E10071] to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Eye className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Explora en AR
              </h3>
              <p className="text-gray-600">
                Ve NFTs en Realidad Aumentada al acercarte a su ubicación.
                Descubre arte digital en el mundo físico.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Qué puedes hacer con WARC
            </h2>
            <p className="text-xl text-gray-600">
              Todo dentro de un ecosistema descentralizado y gamificado
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Coins className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Recolectar Recompensas
                </h3>
                <p className="text-gray-600 text-sm">
                  Gana tokens WARC por cada paso que das y cada ubicación que
                  explores.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-[#E10071] rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  NFTs Geolocalizados
                </h3>
                <p className="text-gray-600 text-sm">
                  Crea y ancla contenido digital único a ubicaciones específicas
                  del mundo real.
                </p>
              </div>
            </div>

            {/* Center Column - Image */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-sm">
                <img
                  src="logo-03.png"
                  alt="WalkARCoin Features"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Explorar y Descubrir
                </h3>
                <p className="text-gray-600 text-sm">
                  Encuentra contenido único y experiencias inmersivas en el
                  mundo real.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E10071] to-red-600 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Monetizar Experiencias
                </h3>
                <p className="text-gray-600 text-sm">
                  Transforma tu arte digital en experiencias monetizables con
                  interacción física.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Users Section */}
      <section id="users" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Para quién es esto
            </h2>
            <p className="text-xl text-gray-600">
              WalkARCoin está diseñado para diferentes tipos de usuarios
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Exploradores
              </h3>
              <p className="text-gray-600">
                Ganan tokens caminando y descubriendo nuevos lugares en su
                ciudad.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Artistas
              </h3>
              <p className="text-gray-600">
                Publican NFTs en ubicaciones reales para crear experiencias
                únicas.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Coleccionistas
              </h3>
              <p className="text-gray-600">
                Descubren y coleccionan arte digital único en el mundo físico.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <ShoppingBag className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Comerciantes
              </h3>
              <p className="text-gray-600">
                Monetizan experiencias y contenido en AR para generar ingresos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Cambia el mundo con nosotros
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Somos una empresa global enfocada en la ciencia y el usuario,
            comprometida con transformar el futuro de la interacción digital y
            física.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/white_paper.pdf"
              target="_blank"
              className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2"
            >
              <Download className="w-5 h-5" />
              <span>Descargar Whitepaper</span>
            </a>
            <a
              href="https://drive.google.com/file/d/1wBGWYkrcFLrHShova90CUrdOb0mtnh0g/view?usp=drive_link"
              download="mi-app.apk"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all"
            >
              Únete ahora
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10  flex items-center justify-center">
                  <img
                    src="logo-03.png"
                    alt="WalkARCoin Features"
                    className="w-full h-auto object-cover "
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">WARC</h3>
                  <p className="text-sm text-gray-400">WalkARCoin</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Experto global en tecnología y medicina. Respaldado por la
                comunidad Web3.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Producto</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Características
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cómo funciona
                  </a>
                </li>
                <li>
                  <a
                    href="/white_paper.pdf"
                    target="_blank"
                    className="hover:text-white transition-colors"
                  >
                    Whitepaper
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Soporte</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Centro de ayuda
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contacto
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Comunidad
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Términos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cookies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Licencias
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 WalkARCoin. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
