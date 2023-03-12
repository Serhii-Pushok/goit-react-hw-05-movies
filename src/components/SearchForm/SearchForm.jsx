import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { toast } from 'react-toastify';
import css from './SearchForm.module.css';

export const SearchForm = ({onSubmit}) => {
    
    const [searchQuery, setSearchQuery] = useState('');

    const handleChangeMovie = event => {
        setSearchQuery(event.target.value.toLowerCase());
    }

    const handleSubmit = event => {
        event.preventDefault();

        if (searchQuery.trim() === '') {
           return toast.warn('Enter a query');
        }

        onSubmit(searchQuery);
        setSearchQuery('');
    }

        return (
                <form className={css.searchForm} onSubmit={handleSubmit}>
                    <button type="submit" className={css.searchFormButton}>
                        <span className={css.searchFormLabel}>Search</span>
                        <AiOutlineSearch />
                    </button>

                    <input
                        onChange={handleChangeMovie}
                        className={css.searchFormInput}
                        type="text"
                        value={searchQuery}
                        autoComplete="off"
                        autoFocus
                        placeholder="Search movies"
                    />
                </form>
        )
}