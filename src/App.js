import Header from './components/Header'
import Footer from './components/Footer'
import Button from './components/Button'

import './App.css'

const App = () => {
  const handleButtonClick = () => {
    console.log('This is an alert!')
  }

  return (
    <div className="app">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="main-content">
        <section className="hero">
          <h1>Welcome to My Website</h1>
          <p>
            This is a simple example demonstrating how to use reusable
            components in React.
          </p>
          <Button
            label="Get Started"
            onClick={handleButtonClick}
            variant="primary"
            size="large"
          />
        </section>

        <section className="features">
          <h2>Features</h2>
          <div className="feature-grid">
            <div className="feature-item">
              <h3>Fast</h3>
              <p>Experience blazing-fast performance.</p>
              <Button
                label="Learn More"
                onClick={handleButtonClick}
                variant="secondary"
              />
            </div>
            <div className="feature-item">
              <h3>Responsive</h3>
              <p>Optimized for all devices and screen sizes.</p>
              <Button
                label="Learn More"
                onClick={handleButtonClick}
                variant="secondary"
              />
            </div>
            <div className="feature-item">
              <h3>Secure</h3>
              <p>Your data is always protected with us.</p>
              <Button
                label="Learn More"
                onClick={handleButtonClick}
                variant="secondary"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
