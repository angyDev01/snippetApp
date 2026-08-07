import '../index.css';

function HeaderBar(){
    const textStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
    display: "flex",
  };



    return (
        <header className="header-bg">
            <h1 className="titre-header">
                Snippet Hub
            </h1>
            <p className='slogan'>
                Your ultimate code repository, simplified.
            </p>
        </header>
    );
}

export default HeaderBar;