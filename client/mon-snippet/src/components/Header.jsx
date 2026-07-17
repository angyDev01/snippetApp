import '../index.css';

function HeaderBar(){
    const textStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
    display: "flex",
  };

  const headerStyle= {
        backgroundRepeat: "no-repeat",
        padding: "50px",
        /* backgroundImage: "url('https://images.unsplash.com/photo-1576272906753-3de49860ea43?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", */

  }


    return (
        <header style={ headerStyle } className="header-bg items-center flex w-full flex-col">
            <h1 style={textStyle} className="titre-header">
                Snippet Hub
            </h1>
            <p className='slogan'>
                Your ultimate code repository, simplified.
            </p>
        </header>
    );
}

export default HeaderBar;