import React from 'react';
import { Input } from 'semantic-ui-react';

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
            <header>
                  <h1 style={{padding: "1rem 0"}}>Search Github Repositories</h1>
                  <form onSubmit={handleSubmit}>
                        <Input type="text" placeholder="Topic" icon="search"/>
                  </form>
            </header>
      )
}

export default Header;
