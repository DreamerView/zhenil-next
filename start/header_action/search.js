/*jshint esversion: 6 */
import { useState,useEffect,useRef,memo } from 'react';
import SearchResult from "/start/services/all.json";

const Search = (res) => {
    const focus = useRef();
    const [search,setSearch] = useState('');
    useEffect(()=>{
        res.change(SearchResult.filter((e)=>{
          if(search === '') return 0;
          else if(e.key.toLowerCase().includes(search.toLowerCase())) return e;
        }));
      },[search]);
      useEffect(()=>{
          focus.current.addEventListener('focus',()=>{
            res.accept(true);
          });
          focus.current.addEventListener('blur',()=>{
            res.accept(false);
        });
      },[focus]);
      
      useEffect(()=>{
        focus.current.value = res.list;
        setSearch(res.list);
      },[res.list]);
    return (
        <>
            <input ref={focus} placeholder={res.text} title={res.text} className="header__search_input" onChange={(e)=>setSearch(e.target.value)}  type="text" />
        </>
    )
};
export default memo(Search);