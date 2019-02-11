import React from 'react';

const Header = (props) => {
      const handleSubmit = (e) => {
            e.preventDefault();
            const query = e.target[0].value.trim();
            if(query !== ''){
                  props.fetchRepos(query);
                  e.target.reset();
            }
      }

      return (
            <header className="Header">
                  <h1>Search Github Repositories</h1>
                  <form className="header-search-form" onSubmit={handleSubmit}>
                        <input type="text" placeholder="Topic"/>
                        <button>Search!</button>
                  </form>
            </header>
      )
}

export default Header;
