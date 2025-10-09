import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#2C1810]">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-[#D4AF37]/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image
                src="/1759501195769.jpg"
                alt="DermaNova Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="#inicio" className="text-[#2C1810] hover:text-[#D4AF37] transition-colors font-medium">
                  Inicio
                </Link>
                <Link href="#servicios" className="text-[#2C1810] hover:text-[#D4AF37] transition-colors font-medium">
                  Servicios
                </Link>
                <Link href="#nosotros" className="text-[#2C1810] hover:text-[#D4AF37] transition-colors font-medium">
                  Nosotros
                </Link>
                <Link href="#contacto" className="text-[#2C1810] hover:text-[#D4AF37] transition-colors font-medium">
                  Contacto
                </Link>
              </div>
            </div>
            <div className="md:hidden">
              <button className="text-[#2C1810] hover:text-[#D4AF37]">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gold-gradient">DermaNova</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#D4AF37] font-light mb-8">
              Centro Estético y Depilación Láser
            </p>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Descubre la excelencia en tratamientos estéticos profesionales. 
              Tu belleza es nuestra pasión, tu confianza nuestro compromiso.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#servicios"
              className="bg-[#D4AF37] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#B8860B] transition-colors shadow-lg"
            >
              Nuestros Servicios
            </Link>
            <Link 
              href="#contacto"
              className="border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-lg font-semibold hover:bg-[#D4AF37] hover:text-white transition-colors shadow-lg"
            >
              Reservar Cita
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gold-gradient">Nuestros Servicios</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tratamientos especializados con tecnología de vanguardia para el cuidado de tu piel
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-[#D4AF37]/40 transition-all shadow-lg">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#D4AF37] mb-4">Depilación Láser</h3>
              <p className="text-gray-600 mb-6">
                Eliminación permanente del vello con tecnología láser de última generación. 
                Resultados efectivos y seguros para todo tipo de piel.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Piernas completas</li>
                <li>• Axilas</li>
                <li>• Bikini</li>
                <li>• Rostro</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-[#D4AF37]/40 transition-all shadow-lg">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#D4AF37] mb-4">Tratamientos Faciales</h3>
              <p className="text-gray-600 mb-6">
                Cuidado especializado del rostro con técnicas profesionales para rejuvenecer 
                y mantener la salud de tu piel.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Limpieza facial profunda</li>
                <li>• Hidratación intensiva</li>
                <li>• Tratamiento anti-edad</li>
                <li>• Peeling químico</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-[#D4AF37]/40 transition-all shadow-lg">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#D4AF37] mb-4">Tratamientos Corporales</h3>
              <p className="text-gray-600 mb-6">
                Terapias especializadas para el cuidado integral del cuerpo, 
                desde relajación hasta tratamientos específicos.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Masajes relajantes</li>
                <li>• Tratamiento anticelulítico</li>
                <li>• Exfoliación corporal</li>
                <li>• Hidratación profunda</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nosotros Section */}
      <section id="nosotros" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gold-gradient">Sobre DermaNova</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Con años de experiencia en el sector estético, DermaNova se ha consolidado 
              como un referente en tratamientos de depilación láser y cuidado de la piel.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#D4AF37] mb-2">Tecnología Avanzada</h3>
                <p className="text-gray-600">Equipos de última generación para resultados óptimos y seguros.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#D4AF37] mb-2">Personal Profesional</h3>
                <p className="text-gray-600">Especialistas certificados con amplia experiencia en el sector.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#D4AF37] mb-2">Atención Personalizada</h3>
                <p className="text-gray-600">Cada tratamiento se adapta a las necesidades específicas de cada cliente.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-br from-[#D4AF37]/10 to-[#B8860B]/10 p-8 rounded-2xl inline-block">
              <div className="text-6xl font-bold text-[#D4AF37] mb-4">5+</div>
              <div className="text-xl text-[#2C1810] mb-8">Años de Experiencia</div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#D4AF37] mb-2">1000+</div>
                  <div className="text-sm text-gray-600">Clientes Satisfechos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#D4AF37] mb-2">98%</div>
                  <div className="text-sm text-gray-600">Tasa de Satisfacción</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gold-gradient">Contáctanos</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Reserva tu cita y descubre cómo podemos ayudarte a alcanzar tus objetivos estéticos
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#D4AF37]">Teléfono</h3>
                    <p className="text-gray-600">+34 123 456 789</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#D4AF37]">Email</h3>
                    <p className="text-gray-600">info@dermanova.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#D4AF37]">Dirección</h3>
                    <p className="text-gray-600">Calle Principal 123, Madrid, España</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-[#D4AF37] mb-6">Síguenos en Instagram</h3>
                <a 
                  href="https://www.instagram.com/dermanova_laser?igsh=MTBqajNpcGEycm4xMg%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281c-.49 0-.98-.49-.98-.98s.49-.98.98-.98.98.49.98.98-.49.98-.98.98zm-1.297 1.297c-1.297 0-2.448-.49-3.323-1.297-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297z"/>
                  </svg>
                  @dermanova_laser
                </a>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold text-[#D4AF37] mb-6">Reserva tu Cita</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-[#2C1810] focus:border-[#D4AF37] focus:outline-none"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-[#2C1810] focus:border-[#D4AF37] focus:outline-none"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-[#2C1810] focus:border-[#D4AF37] focus:outline-none"
                    placeholder="+34 123 456 789"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Servicio de Interés</label>
                  <select className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-[#2C1810] focus:border-[#D4AF37] focus:outline-none">
                    <option>Depilación Láser</option>
                    <option>Tratamientos Faciales</option>
                    <option>Tratamientos Corporales</option>
                    <option>Consulta General</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-[#2C1810] focus:border-[#D4AF37] focus:outline-none"
                    placeholder="Cuéntanos sobre tus necesidades..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-[#D4AF37] text-white py-3 rounded-lg font-semibold hover:bg-[#B8860B] transition-colors shadow-lg"
                >
                  Enviar Solicitud
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Image
                src="/1759501195769.jpg"
                alt="DermaNova Logo"
                width={150}
                height={50}
                className="h-12 w-auto mb-4"
              />
              <p className="text-gray-600 mb-4">
                Centro especializado en tratamientos estéticos y depilación láser. 
                Tu belleza es nuestra pasión.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#D4AF37] mb-4">Servicios</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Depilación Láser</li>
                <li>Tratamientos Faciales</li>
                <li>Tratamientos Corporales</li>
                <li>Consultas Estéticas</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#D4AF37] mb-4">Contacto</h3>
              <ul className="space-y-2 text-gray-600">
                <li>+34 123 456 789</li>
                <li>info@dermanova.com</li>
                <li>Calle Principal 123, Madrid</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
            <p>&copy; 2024 DermaNova. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
