import { useId, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTextFilter } from "../../redux/filters/slice.js";
import { selectTextFilter } from "../../redux/filters/selectors.js";
import { debounce } from "lodash";

import css from "./TextFilter.module.css";

export default function TextFilter() {
  const dispatch = useDispatch();
  const id = useId();
  const textFilter = useSelector(selectTextFilter);
  const [localFilter, setLocalFilter] = useState(textFilter);

  useEffect(() => {
    const debouncedChangeHandler = debounce((value) => {
      dispatch(changeTextFilter(value));
    }, 300);

    debouncedChangeHandler(localFilter);

    return () => {
      debouncedChangeHandler.cancel();
    };
  }, [localFilter, dispatch]);

  const handleChange = (event) => {
    setLocalFilter(event.target.value);
  };

  return (
    <div className={css.wrapper}>
      <label htmlFor={id}>
        <b>Filter by text</b>
      </label>
      <input className={css.field} value={localFilter} onChange={handleChange} type="text" id={id} />
    </div>
  );
}
