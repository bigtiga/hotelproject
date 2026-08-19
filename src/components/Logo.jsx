const Logo = () => {
    return (
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '4px', 
        textDecoration: 'none', 
        cursor: 'pointer',
        whiteSpace: 'nowrap', // Prevents text from wrapping on mobile
      }}>
        <span style={{ 
          fontSize: 'clamp(18px, 24px, 28px)', // Responsive: 18px on mobile, 24px default, 28px on large screens
          fontWeight: 700, 
          color: 'var(--text-primary)', 
          letterSpacing: '-0.5px' 
        }}>
          Waje
        </span>
        <span style={{ 
          fontSize: 'clamp(18px, 24px, 28px)', // Responsive: 18px on mobile, 24px default, 28px on large screens
          fontWeight: 300, 
          color: 'var(--accent)', 
          letterSpacing: '-0.5px' 
        }}>
          Hotel
        </span>
      </div>
    );
  };
  
  export default Logo;