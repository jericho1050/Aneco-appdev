import Link from 'next/link';
import Image from 'next/image';
import {
  Bell,
  Calendar,
  DollarSign,
  Star,
  BarChart2,
  User,
  Home,
  ChevronRight,
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className='min-h-screen bg-gray-100'>
      {/* Navigation */}
      <header className='sticky top-0 z-50'>
        <nav className='bg-gray-100 shadow-sm'>
          <div className='container mx-auto px-4 py-4'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <Link href='/' className='flex items-center'>
                  <div className='h-10 w-10 rounded-full bg-gray-100 shadow-neumorph flex items-center justify-center mr-2'>
                    <Home className='h-5 w-5 text-orange-500' />
                  </div>
                  <span className='text-xl font-bold text-gray-700'>
                    ANECO.PH
                  </span>
                </Link>
              </div>
              <div className='hidden md:flex space-x-6'>
                <NavLink href='/about'>About Us</NavLink>
                <NavLink href='/consumer'>Consumer Info</NavLink>
                <NavLink href='/csr'>ANECO's CSR</NavLink>
                <NavLink href='/bid'>Invitation to Bid</NavLink>
                <NavLink href='/agma'>AGMA</NavLink>
                <NavLink href='/pspp'>PSPP</NavLink>
                <NavLink href='/contact'>Contact Us</NavLink>
                <NavLink href='/myaneco'>MyANECO</NavLink>
              </div>
              <div className='md:hidden'>
                <button className='h-10 w-10 rounded-xl bg-gray-100 shadow-neumorph flex items-center justify-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6 text-gray-700'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className='py-16 md:py-24'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col md:flex-row items-center'>
            <div className='md:w-1/2 mb-10 md:mb-0'>
              <div className='p-8 rounded-3xl bg-gray-100 shadow-neumorph-inset max-w-lg mx-auto md:mx-0'>
                <div className='mb-6 inline-block p-4 rounded-2xl bg-gray-100 shadow-neumorph'>
                  <Image
                    src='/images/logo1.png'
                    alt='ANECO Logo'
                    width={80}
                    height={80}
                    className='mx-auto'
                  />
                </div>
                <h1 className='text-3xl md:text-4xl font-bold text-gray-800 mb-4'>
                  Powering Progress in Agusan Del Norte
                </h1>
                <p className='text-gray-600 mb-8'>
                  ANECO: Kaabag sa pag-uswag. Your reliable partner in providing
                  sustainable and affordable electricity to empower communities.
                </p>
                <button className='px-8 py-3 rounded-xl bg-gray-100 shadow-neumorph text-orange-500 font-medium hover:shadow-neumorph-pressed transition-all duration-300 flex items-center'>
                  Get Connected <ChevronRight className='ml-2 h-4 w-4' />
                </button>
              </div>
            </div>
            <div className='md:w-1/2'>
              <div className='p-6 rounded-3xl bg-gray-100 shadow-neumorph overflow-hidden'>
                <Image
                  src='/images/hero.jpg'
                  alt='ANECO Service'
                  width={800}
                  height={600}
                  className='rounded-2xl h-96 w-full'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold text-gray-800 mb-4'>
              Our Services
            </h2>
            <p className='text-gray-600 max-w-2xl mx-auto'>
              Providing reliable electricity services to meet the needs of our
              community
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <ServiceCard
              icon={<Calendar className='h-8 w-8 text-orange-500' />}
              title='Maintenance Schedule'
              description='Stay informed about our planned maintenance activities to minimize disruptions.'
            />
            <ServiceCard
              icon={<Bell className='h-8 w-8 text-orange-500' />}
              title='Announcements'
              description='Get the latest updates and important information about our services.'
            />
            <ServiceCard
              icon={<DollarSign className='h-8 w-8 text-orange-500' />}
              title='Electricity Rates'
              description='Transparent information about current electricity rates and billing.'
            />
            <ServiceCard
              icon={<Star className='h-8 w-8 text-orange-500' />}
              title='Supply/Demand Outlook'
              description='Monitor the current power supply situation and demand forecasts.'
            />
            <ServiceCard
              icon={<BarChart2 className='h-8 w-8 text-orange-500' />}
              title='News and Events'
              description='Stay updated with the latest news and upcoming events from ANECO.'
            />
            <ServiceCard
              icon={<User className='h-8 w-8 text-orange-500' />}
              title='MyANECO'
              description='Access your account, pay bills, and manage your electricity services online.'
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className='py-16'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold text-gray-800 mb-4'>
              Trusted by the Community
            </h2>
            <p className='text-gray-600 max-w-2xl mx-auto'>
              See what our customers have to say about our services
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <TestimonialCard
              name='Maria Santos'
              role='Residential Customer'
              content='ANECO has been providing reliable electricity to our home for years. Their customer service is excellent and responsive.'
            />
            <TestimonialCard
              name='Juan Dela Cruz'
              role='Business Owner'
              content='As a business owner, consistent power supply is crucial. ANECO understands this and ensures minimal disruptions.'
            />
            <TestimonialCard
              name='Elena Reyes'
              role='Community Leader'
              content="ANECO's community programs have made a significant impact in our barangay. They're more than just a utility provider."
            />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl mx-auto p-8 rounded-3xl bg-gray-100 shadow-neumorph'>
            <div className='text-center mb-8'>
              <h2 className='text-2xl font-bold text-gray-800 mb-2'>
                Stay Updated
              </h2>
              <p className='text-gray-600'>
                Get the latest updates. Subscribe to our newsletter.
              </p>
            </div>
            <form className='flex flex-col md:flex-row gap-4'>
              <input
                type='email'
                placeholder='Enter your email'
                className='flex-1 px-6 py-3 rounded-xl bg-gray-100 shadow-neumorph-inset text-gray-700 focus:outline-none'
              />
              <button
                type='submit'
                className='px-6 py-3 rounded-xl bg-gray-100 shadow-neumorph text-orange-500 font-medium hover:shadow-neumorph-pressed transition-all duration-300'
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='py-12 bg-gray-100'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='mb-6 md:mb-0'>
              <Link href='/' className='flex items-center'>
                <div className='h-10 w-10 rounded-full bg-gray-100 shadow-neumorph flex items-center justify-center mr-2'>
                  <Home className='h-5 w-5 text-orange-500' />
                </div>
                <span className='text-xl font-bold text-gray-700'>
                  ANECO.PH
                </span>
              </Link>
              <p className='text-gray-600 mt-2 text-sm'>
                Agusan Del Norte Electric Cooperative, Inc.
              </p>
              <p className='text-gray-600 text-sm'>Kaabag sa pag-uswag</p>
            </div>
            <div className='flex flex-wrap justify-center gap-4'>
              <Link
                href='/about'
                className='text-gray-600 hover:text-orange-500'
              >
                About Us
              </Link>
              <Link
                href='/consumer'
                className='text-gray-600 hover:text-orange-500'
              >
                Consumer Info
              </Link>
              <Link
                href='/contact'
                className='text-gray-600 hover:text-orange-500'
              >
                Contact Us
              </Link>
              <Link
                href='/privacy'
                className='text-gray-600 hover:text-orange-500'
              >
                Privacy Policy
              </Link>
            </div>
            <div className='mt-6 md:mt-0'>
              <div className='p-2 rounded-xl bg-gray-100 shadow-neumorph inline-block'>
                <Image
                  src='/placeholder.svg?height=40&width=120'
                  alt='Verified & Secured'
                  width={120}
                  height={40}
                />
              </div>
            </div>
          </div>
          <div className='border-t border-gray-200 mt-8 pt-8 text-center'>
            <p className='text-gray-600 text-sm'>
              © {new Date().getFullYear()} ANECO. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className='text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200'
    >
      {children}
    </Link>
  );
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className='p-6 rounded-2xl bg-gray-100 shadow-neumorph hover:shadow-neumorph-pressed transition-all duration-300'>
      <div className='mb-4 p-3 inline-block rounded-xl bg-gray-100 shadow-neumorph'>
        {icon}
      </div>
      <h3 className='text-xl font-bold text-gray-800 mb-2'>{title}</h3>
      <p className='text-gray-600'>{description}</p>
    </div>
  );
}

function TestimonialCard({
  name,
  role,
  content,
}: {
  name: string;
  role: string;
  content: string;
}) {
  return (
    <div className='p-6 rounded-2xl bg-gray-100 shadow-neumorph'>
      <div className='mb-4'>
        <svg
          className='h-8 w-8 text-orange-400'
          fill='currentColor'
          viewBox='0 0 24 24'
        >
          <path d='M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z' />
        </svg>
      </div>
      <p className='text-gray-600 mb-4'>{content}</p>
      <div className='flex items-center'>
        <div className='h-10 w-10 rounded-full bg-gray-100 shadow-neumorph flex items-center justify-center mr-3'>
          <span className='text-orange-500 font-bold'>{name.charAt(0)}</span>
        </div>
        <div>
          <h4 className='font-bold text-gray-800'>{name}</h4>
          <p className='text-gray-600 text-sm'>{role}</p>
        </div>
      </div>
    </div>
  );
}
