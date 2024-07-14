
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NewsService } from '../../../../services/news.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss'],
  imports: [NgIf, NgFor],
})
export class FilterBarComponent implements OnInit {
    showDropdown = false;
    searchedQueries: string[] =[]
    @Output() filterBySymbol = new EventEmitter()

    get addedSymbols() {
        return this._newsService.addedSymbols
    }
    
    constructor(
        private _newsService: NewsService
    ) {}

    ngOnInit() {
    }

    openSerchDropDown(): void {
        this.showDropdown = true
        const queries = localStorage.getItem('searchedQueries');
        if(!queries) return;
        this.searchedQueries = JSON.parse(queries);
    }

    addSymbol(input: HTMLInputElement): void {
        if(!input.value) return;

        if(!this._newsService.addedSymbols.find(s => s === input.value)) {
            this._newsService.addedSymbols.push(input.value);
        }
        
        this.filterBySymbol.emit(this._newsService.addedSymbols)

        const queries = localStorage.getItem('searchedQueries');

        if(!queries) {
            localStorage.setItem('searchedQueries',JSON.stringify(this._newsService.addedSymbols));
        } else {
            const savedQueres: string[] = JSON.parse(queries);
            if(!savedQueres.find(s => s === input.value)) {
                savedQueres.push(input.value);
                localStorage.setItem('searchedQueries',JSON.stringify(savedQueres));
            }
        }

        input.value = '';
    }

    removeSymbol(symbol: string): void {
        this._newsService.addedSymbols = this._newsService.addedSymbols.filter(s => s !== symbol)
        this.filterBySymbol.emit(this._newsService.addedSymbols)
    }  
}
