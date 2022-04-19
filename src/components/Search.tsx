import * as React from 'react';

interface ISearchProps {
  searchValue: string;
  HandleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  HandleClick: (e: React.ChangeEvent<HTMLFormElement>) => void;

}


export function Search({ HandleClick, HandleOnChange, searchValue }: ISearchProps) {
  return (
    <div className='search'>

      <form onSubmit={HandleClick}>
        <input onChange={HandleOnChange}
          type="search" className="search-content"
          value={searchValue}
          placeholder="Enter your search term or Id">

        </input>
      </form>
    </div>
  );
}
