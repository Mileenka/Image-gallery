import { dom } from '../data.js';
import { handlerSearch } from '../handlers/handlerSearch.js';

dom.searchInput.addEventListener('input', handlerSearch);
