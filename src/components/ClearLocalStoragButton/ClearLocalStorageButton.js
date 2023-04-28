function ClearLocalStorageButton() {
  const handleClick = () => {
    const confirmed = window.confirm('Êtes-vous sûr de vouloir tout réinitialiser ?');
    if (confirmed) {
      localStorage.clear();
      window.location.reload(); // Rediriger pour recharger la page
    }
  };

  return (
    <button className="buttonRouge" onClick={handleClick}>Remise à 0</button>
  );
}

export default ClearLocalStorageButton;
