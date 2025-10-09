"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen clean-gradient text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-gradient-to-r from-[#000000]/95 to-[#1a1a1a]/95 backdrop-blur-sm z-50 border-b border-[#D4AF37]/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
        <Image
                src="/1759501217199.jpg"
                alt="DermaNova Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="#inicio" className="text-white hover:text-[#D4AF37] transition-colors font-medium">
                  Inicio
                </Link>
              <Link href="#servicios" className="text-white hover:text-[#D4AF37] transition-colors font-medium">
                Servicios
              </Link>
              <Link href="#nosotros" className="text-white hover:text-[#D4AF37] transition-colors font-medium">
                Nosotros
              </Link>
              <Link href="#galeria" className="text-white hover:text-[#D4AF37] transition-colors font-medium">
                Galería
              </Link>
              <Link href="#testimonios" className="text-white hover:text-[#D4AF37] transition-colors font-medium">
                Testimonios
              </Link>
              <Link href="#contacto" className="text-white hover:text-[#D4AF37] transition-colors font-medium">
                Contacto
              </Link>
              </div>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="text-white hover:text-[#D4AF37] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 rounded-lg p-2"
                aria-label="Toggle mobile menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                  <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                  <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div className="fixed inset-0 z-40 md:hidden">
              <div className="fixed inset-0 bg-black/40" onClick={closeMobileMenu}></div>
              <div className="fixed top-0 right-0 h-full w-1/2 bg-black shadow-2xl transform transition-transform duration-300 ease-in-out border-l border-[#D4AF37]/30">
                <div className="flex flex-col h-full">
                  {/* Mobile Menu Header */}
                  <div className="flex items-center justify-between p-6 border-b border-[#D4AF37]/30 bg-gradient-to-r from-black to-[#1a1a1a]">
                    <div className="flex items-center space-x-3">
                      <Image
                        src="/1759501217199.jpg"
                        alt="DermaNova Logo"
                        width={80}
                        height={25}
                        className="h-6 w-auto"
                      />
                      <span className="text-white font-semibold text-lg">Menú</span>
                    </div>
                    <button 
                      onClick={closeMobileMenu}
                      className="text-white hover:text-[#D4AF37] transition-colors duration-300 p-2 rounded-lg hover:bg-[#D4AF37]/20"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Mobile Menu Links */}
                  <nav className="flex-1 px-6 py-8 bg-gradient-to-b from-[#1a1a1a] to-black">
                    <div className="space-y-4">
                      <Link 
                        href="#inicio" 
                        onClick={closeMobileMenu}
                        className="flex items-center p-4 text-white hover:text-[#D4AF37] hover:bg-[#D4AF37]/20 rounded-lg transition-all duration-300 font-medium border border-[#D4AF37]/20 hover:border-[#D4AF37]/40"
                      >
                        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <span>Inicio</span>
                      </Link>
                      <Link 
                        href="#servicios" 
                        onClick={closeMobileMenu}
                        className="flex items-center p-4 text-white hover:text-[#D4AF37] hover:bg-[#D4AF37]/20 rounded-lg transition-all duration-300 font-medium border border-[#D4AF37]/20 hover:border-[#D4AF37]/40"
                      >
                        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                        <span>Servicios</span>
                      </Link>
                      <Link 
                        href="#nosotros" 
                        onClick={closeMobileMenu}
                        className="flex items-center p-4 text-white hover:text-[#D4AF37] hover:bg-[#D4AF37]/20 rounded-lg transition-all duration-300 font-medium border border-[#D4AF37]/20 hover:border-[#D4AF37]/40"
                      >
                        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span>Nosotros</span>
                      </Link>
                      <Link 
                        href="#galeria" 
                        onClick={closeMobileMenu}
                        className="flex items-center p-4 text-white hover:text-[#D4AF37] hover:bg-[#D4AF37]/20 rounded-lg transition-all duration-300 font-medium border border-[#D4AF37]/20 hover:border-[#D4AF37]/40"
                      >
                        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>Galería</span>
                      </Link>
                      <Link 
                        href="#testimonios" 
                        onClick={closeMobileMenu}
                        className="flex items-center p-4 text-white hover:text-[#D4AF37] hover:bg-[#D4AF37]/20 rounded-lg transition-all duration-300 font-medium border border-[#D4AF37]/20 hover:border-[#D4AF37]/40"
                      >
                        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <span>Testimonios</span>
                      </Link>
                      <Link 
                        href="#contacto" 
                        onClick={closeMobileMenu}
                        className="flex items-center p-4 text-white hover:text-[#D4AF37] hover:bg-[#D4AF37]/20 rounded-lg transition-all duration-300 font-medium border border-[#D4AF37]/20 hover:border-[#D4AF37]/40"
                      >
                        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>Contacto</span>
                      </Link>
                    </div>
                  </nav>

                  {/* Mobile Menu Footer */}
                  <div className="p-6 border-t border-[#D4AF37]/30 bg-gradient-to-r from-black to-[#1a1a1a]">
                    <div className="space-y-4">
                      <p className="text-gray-300 text-sm text-center">
                        Centro especializado en tratamientos estéticos y depilación láser
                      </p>
                      <div className="flex justify-center">
                        <a 
                          href="https://wa.me/573007014133?text=Hola%20DermaNova,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg w-full justify-center"
                        >
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                          </svg>
                          Contactar por WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a1a1a] to-[#2d2d2d]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gold-gradient">DermaNova</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#D4AF37] font-light mb-8">
              Centro Estético y Depilación Láser
            </p>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Descubre la excelencia en tratamientos estéticos profesionales. 
              Tu belleza es nuestra pasión, tu confianza nuestro compromiso.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#servicios"
              className="bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#B8860B] transition-colors shadow-lg"
            >
              Nuestros Servicios
            </Link>
            <Link 
              href="#contacto"
              className="border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-lg font-semibold hover:bg-[#D4AF37] hover:text-black transition-colors shadow-lg"
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
      <section id="servicios" className="py-20 dark-section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gold-gradient">Nuestros Servicios</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Tratamientos especializados con tecnología de vanguardia para el cuidado de tu piel
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#1a1a1a] to-black p-8 rounded-xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all shadow-lg">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#D4AF37] mb-4">Depilación Láser</h3>
              <p className="text-gray-300 mb-6">
                Eliminación permanente del vello con tecnología láser de última generación. 
                Resultados efectivos y seguros para todo tipo de piel.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Piernas completas</li>
                <li>• Axilas</li>
                <li>• Bikini</li>
                <li>• Rostro</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a1a] to-black p-8 rounded-xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all shadow-lg">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#D4AF37] mb-4">Tratamientos Faciales</h3>
              <p className="text-gray-300 mb-6">
                Cuidado especializado del rostro con técnicas profesionales para rejuvenecer 
                y mantener la salud de tu piel.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Limpieza facial profunda</li>
                <li>• Hidratación intensiva</li>
                <li>• Tratamiento anti-edad</li>
                <li>• Peeling químico</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a1a] to-black p-8 rounded-xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all shadow-lg">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#D4AF37] mb-4">Tratamientos Corporales</h3>
              <p className="text-gray-300 mb-6">
                Terapias especializadas para el cuidado integral del cuerpo, 
                desde relajación hasta tratamientos específicos.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
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
      <section id="nosotros" className="py-20 dark-bg-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gold-gradient">Sobre DermaNova</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Con años de experiencia en el sector estético, DermaNova se ha consolidado 
              como un referente en tratamientos de depilación láser y cuidado de la piel.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#D4AF37] mb-2">Tecnología Avanzada</h3>
                    <p className="text-gray-300">Equipos de última generación para resultados óptimos y seguros.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#D4AF37] mb-2">Personal Profesional</h3>
                    <p className="text-gray-300">Especialistas certificados con amplia experiencia en el sector.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#D4AF37] mb-2">Atención Personalizada</h3>
                    <p className="text-gray-300">Cada tratamiento se adapta a las necesidades específicas de cada cliente.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-br from-[#D4AF37]/20 to-[#B8860B]/20 p-8 rounded-2xl inline-block">
              <div className="text-6xl font-bold text-[#D4AF37] mb-4">5+</div>
              <div className="text-xl text-white mb-8">Años de Experiencia</div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#D4AF37] mb-2">1000+</div>
                  <div className="text-sm text-gray-300">Clientes Satisfechos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#D4AF37] mb-2">98%</div>
                  <div className="text-sm text-gray-300">Tasa de Satisfacción</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-20 dark-bg-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Nuestros <span className="gold-gradient">Trabajos</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Descubre los resultados de nuestros tratamientos estéticos y depilación láser
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder para imágenes - puedes reemplazar con imágenes reales */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-black rounded-xl overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300 group">
              <div className="aspect-square bg-gradient-to-br from-[#D4AF37]/20 to-[#B8860B]/20 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 text-[#D4AF37] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-[#D4AF37] font-semibold">Imagen 1</p>
                  <p className="text-gray-400 text-sm">Depilación Láser</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-2">Antes y Después</h3>
                <p className="text-gray-400 text-sm">Resultados de depilación láser en piernas</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a1a] to-black rounded-xl overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300 group">
              <div className="aspect-square bg-gradient-to-br from-[#D4AF37]/20 to-[#B8860B]/20 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 text-[#D4AF37] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-[#D4AF37] font-semibold">Imagen 2</p>
                  <p className="text-gray-400 text-sm">Tratamiento Facial</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-2">Piel Renovada</h3>
                <p className="text-gray-400 text-sm">Tratamiento facial hidratante profundo</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a1a] to-black rounded-xl overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300 group">
              <div className="aspect-square bg-gradient-to-br from-[#D4AF37]/20 to-[#B8860B]/20 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 text-[#D4AF37] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-[#D4AF37] font-semibold">Imagen 3</p>
                  <p className="text-gray-400 text-sm">Tratamiento Corporal</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-2">Cuerpo Tonificado</h3>
                <p className="text-gray-400 text-sm">Tratamiento corporal reductor y tonificante</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a1a] to-black rounded-xl overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300 group">
              <div className="aspect-square bg-gradient-to-br from-[#D4AF37]/20 to-[#B8860B]/20 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 text-[#D4AF37] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-[#D4AF37] font-semibold">Imagen 4</p>
                  <p className="text-gray-400 text-sm">Depilación Facial</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-2">Rostro Suave</h3>
                <p className="text-gray-400 text-sm">Depilación láser facial delicada</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a1a] to-black rounded-xl overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300 group">
              <div className="aspect-square bg-gradient-to-br from-[#D4AF37]/20 to-[#B8860B]/20 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 text-[#D4AF37] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-[#D4AF37] font-semibold">Imagen 5</p>
                  <p className="text-gray-400 text-sm">Tratamiento Anti-edad</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-2">Piel Joven</h3>
                <p className="text-gray-400 text-sm">Tratamiento anti-envejecimiento facial</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a1a] to-black rounded-xl overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300 group">
              <div className="aspect-square bg-gradient-to-br from-[#D4AF37]/20 to-[#B8860B]/20 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 text-[#D4AF37] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-[#D4AF37] font-semibold">Imagen 6</p>
                  <p className="text-gray-400 text-sm">Depilación Axilas</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-2">Axilas Perfectas</h3>
                <p className="text-gray-400 text-sm">Depilación láser en axilas</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-6">
              ¿Quieres ver más resultados? Síguenos en nuestras redes sociales
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="https://www.instagram.com/dermanova_laser/"
            target="_blank"
            rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Ver en Instagram
          </a>
          <a
                href="https://www.facebook.com/people/Dermanova/61559819439320/"
            target="_blank"
            rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Ver en Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-20 dark-section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Lo que dicen nuestros <span className="gold-gradient">Clientes</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Descubre las experiencias reales de quienes han confiado en nuestros tratamientos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonio 1 - Placeholder */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-black rounded-xl p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="flex text-[#D4AF37]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="aspect-video bg-gradient-to-br from-[#D4AF37]/10 to-[#B8860B]/10 rounded-lg mb-4 flex items-center justify-center border border-[#D4AF37]/20">
                <div className="text-center">
                  <svg className="w-12 h-12 text-[#D4AF37] mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-[#D4AF37] font-semibold text-sm">Captura WhatsApp</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 italic">
                &quot;Próximamente: testimonio real de nuestros clientes satisfechos&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">?</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Cliente Satisfecho</h4>
                  <p className="text-gray-400 text-sm">Servicio Realizado</p>
                </div>
              </div>
            </div>

            {/* Testimonio 2 - Placeholder */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-black rounded-xl p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="flex text-[#D4AF37]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="aspect-video bg-gradient-to-br from-[#D4AF37]/10 to-[#B8860B]/10 rounded-lg mb-4 flex items-center justify-center border border-[#D4AF37]/20">
                <div className="text-center">
                  <svg className="w-12 h-12 text-[#D4AF37] mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-[#D4AF37] font-semibold text-sm">Captura WhatsApp</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 italic">
                &quot;Próximamente: testimonio real de nuestros clientes satisfechos&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">?</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Cliente Satisfecho</h4>
                  <p className="text-gray-400 text-sm">Servicio Realizado</p>
                </div>
              </div>
            </div>

            {/* Testimonio 3 - Placeholder */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-black rounded-xl p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="flex text-[#D4AF37]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="aspect-video bg-gradient-to-br from-[#D4AF37]/10 to-[#B8860B]/10 rounded-lg mb-4 flex items-center justify-center border border-[#D4AF37]/20">
                <div className="text-center">
                  <svg className="w-12 h-12 text-[#D4AF37] mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-[#D4AF37] font-semibold text-sm">Captura WhatsApp</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 italic">
                &quot;Próximamente: testimonio real de nuestros clientes satisfechos&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">?</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Cliente Satisfecho</h4>
                  <p className="text-gray-400 text-sm">Servicio Realizado</p>
                </div>
              </div>
            </div>

            {/* Testimonio 4 - Placeholder */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-black rounded-xl p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="flex text-[#D4AF37]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="aspect-video bg-gradient-to-br from-[#D4AF37]/10 to-[#B8860B]/10 rounded-lg mb-4 flex items-center justify-center border border-[#D4AF37]/20">
                <div className="text-center">
                  <svg className="w-12 h-12 text-[#D4AF37] mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-[#D4AF37] font-semibold text-sm">Captura WhatsApp</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 italic">
                &quot;Próximamente: testimonio real de nuestros clientes satisfechos&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">?</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Cliente Satisfecho</h4>
                  <p className="text-gray-400 text-sm">Servicio Realizado</p>
                </div>
              </div>
            </div>

            {/* Testimonio 5 - Placeholder */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-black rounded-xl p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="flex text-[#D4AF37]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="aspect-video bg-gradient-to-br from-[#D4AF37]/10 to-[#B8860B]/10 rounded-lg mb-4 flex items-center justify-center border border-[#D4AF37]/20">
                <div className="text-center">
                  <svg className="w-12 h-12 text-[#D4AF37] mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-[#D4AF37] font-semibold text-sm">Captura WhatsApp</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 italic">
                &quot;Próximamente: testimonio real de nuestros clientes satisfechos&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">?</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Cliente Satisfecho</h4>
                  <p className="text-gray-400 text-sm">Servicio Realizado</p>
                </div>
              </div>
            </div>

            {/* Testimonio 6 - Placeholder */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-black rounded-xl p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="flex text-[#D4AF37]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="aspect-video bg-gradient-to-br from-[#D4AF37]/10 to-[#B8860B]/10 rounded-lg mb-4 flex items-center justify-center border border-[#D4AF37]/20">
                <div className="text-center">
                  <svg className="w-12 h-12 text-[#D4AF37] mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-[#D4AF37] font-semibold text-sm">Captura WhatsApp</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 italic">
                &quot;Próximamente: testimonio real de nuestros clientes satisfechos&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">?</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Cliente Satisfecho</h4>
                  <p className="text-gray-400 text-sm">Servicio Realizado</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-[#D4AF37]/10 to-[#B8860B]/10 rounded-xl p-8 border border-[#D4AF37]/20">
              <h3 className="text-2xl font-bold text-white mb-4">¿Quieres ser nuestro próximo testimonio?</h3>
              <p className="text-gray-300 mb-6">
                Descubre por qué nuestros clientes nos recomiendan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-20 dark-section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gold-gradient">Contáctanos</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Reserva tu cita y descubre cómo podemos ayudarte a alcanzar tus objetivos estéticos
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#D4AF37]">Teléfono</h3>
                    <p className="text-gray-300">+57 300 701 4133</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#D4AF37]">Email</h3>
                    <p className="text-gray-300">info@dermanova.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#D4AF37]">Dirección</h3>
                    <p className="text-gray-300">Centro comercial Estación Niquia, Medellín, Colombia</p>
                  </div>
                </div>
              </div>
              
              {/* Mapa de Google Maps */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-[#D4AF37] mb-6">Nuestra Ubicación</h3>
                <div className="bg-black/50 backdrop-blur-sm rounded-xl border border-[#D4AF37]/20 overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.123456789!2d-75.5448864!3d6.3397168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442f99861d54a5%3A0x84cfe40f878310ca!2sDermaNova%20depilaci%C3%B3n%20l%C3%A1ser%20diodo!5e0!3m2!1ses!2sco!4v1234567890123!5m2!1ses!2sco"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-96"
                    title="Ubicación de DermaNova - Centro comercial Estación Niquia, Medellín"
                  ></iframe>
                </div>
                <div className="mt-4 text-center">
                  <a 
                    href="https://www.google.com/maps/place/DermaNova+depilaci%C3%B3n+l%C3%A1ser+diodo/@6.3397168,-75.5448864,15z/data=!4m6!3m5!1s0x8e442f99861d54a5:0x84cfe40f878310ca!8m2!3d6.3397168!4d-75.5448864!16s%2Fg%2F11y4ykbwq7?entry=tts&g_ep=EgoyMDI0MDUyMi4wKgBIAVAD"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#D4AF37] hover:text-[#B8860B] transition-colors duration-300"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Ver en Google Maps
                  </a>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-[#D4AF37] mb-6">Síguenos en Redes Sociales</h3>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://www.instagram.com/dermanova_laser/"
          target="_blank"
          rel="noopener noreferrer"
                    className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Instagram
        </a>
        <a
                    href="https://www.facebook.com/people/Dermanova/61559819439320/"
          target="_blank"
          rel="noopener noreferrer"
                    className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Facebook
        </a>
        <a
                    href="https://www.tiktok.com/@dermanovalaser"
          target="_blank"
          rel="noopener noreferrer"
                    className="inline-flex items-center bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-all"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                    TikTok
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#1a1a1a] to-black p-8 rounded-xl border border-[#D4AF37]/20 shadow-lg">
              <h3 className="text-2xl font-bold text-[#D4AF37] mb-6">Reserva tu Cita</h3>
              
              <div className="text-center">
                <div className="mb-6">
                  <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  <h4 className="text-xl font-semibold text-white mb-2">Contacto Directo</h4>
                  <p className="text-gray-300 mb-6">
                    Para una atención más rápida y personalizada, contáctanos directamente por WhatsApp
                  </p>
                </div>
                
                <a 
                  href="https://wa.me/573007014133?text=Hola%20DermaNova,%20me%20interesa%20reservar%20una%20cita.%20Mi%20nombre%20es%20[NOMBRE]%20y%20me%20interesa%20el%20servicio%20de%20[SERVICIO]."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg text-lg"
                >
                  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Reservar Cita por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="dark-bg-gradient border-t border-[#D4AF37]/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
          <Image
                src="/1759501217199.jpg"
                alt="DermaNova Logo"
                width={150}
                height={50}
                className="h-12 w-auto mb-4"
              />
              <p className="text-gray-400 mb-4">
                Centro especializado en tratamientos estéticos y depilación láser. 
                Tu belleza es nuestra pasión.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#D4AF37] mb-4">Servicios</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Depilación Láser</li>
                <li>Tratamientos Faciales</li>
                <li>Tratamientos Corporales</li>
                <li>Consultas Estéticas</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#D4AF37] mb-4">Contacto</h3>
              <ul className="space-y-2 text-gray-400">
                <li>+57 300 701 4133</li>
                <li>info@dermanova.com</li>
                <li>Centro comercial Estación Niquia, Medellín</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DermaNova. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/573007014133?text=Hola%20DermaNova,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-50 group"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
        <span className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          ¡Escríbenos por WhatsApp!
        </span>
      </a>
    </div>
  );
}
