import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { AppComponent } from '../app.component';

export interface User {
  name: string;
}

/**
 * @title Display value autocomplete
 */
@Component({
  selector: 'app-state-query',
  templateUrl: './state-query.component.html',
  styleUrls: ['./state-query.component.css']
})
export class StateQueryComponent implements OnInit {
  myControl = new FormControl<string | User>('');
  options: User[] = [{name: 'Alabama (AL)'},
  {name: 'Alaska (AK)'},
  {name: 'Arizona (AZ)'},
  {name: 'Arkansas (AR)'},
  {name: 'California (CA)'},
  {name: 'Colorado (CO)'},
  {name: 'Connecticut (CT)'},
  {name: 'Delaware (DE)'},
  {name: 'District of Columbia (DC)'},
  {name: 'Florida (FL)'},
  {name: 'Georgia (GA)'},
  {name: 'Hawaii (HI)'},
  {name: 'Idaho (ID)'},
  {name: 'Illinois (IL)'},
  {name: 'Indiana (IN)'},
  {name: 'Iowa (IA)'},
  {name: 'Kansas (KS)'},
  {name: 'Kentucky (KY)'},
  {name: 'Louisiana (LA)'},
  {name: 'Maine (ME)'},
  {name: 'Maryland (MD)'},
  {name: 'Massachusetts (MA)'},
  {name: 'Michigan (MI)'},
  {name: 'Minnesota (MN)'},
  {name: 'Mississippi (MS)'},
  {name: 'Missouri (MO)'},
  {name: 'Montana (MT)'},
  {name: 'Nebraska (NE)'},
  {name: 'Nevada (NV)'},
  {name: 'New Hampshire (NH)'},
  {name: 'New Jersey (NJ)'},
  {name: 'New Mexico (NM)'},
  {name: 'New York (NY)'},
  {name: 'North Carolina (NC)'},
  {name: 'North Dakota (ND)'},
  {name: 'Ohio (OH)'},
  {name: 'Oklahoma (OK)'},
  {name: 'Oregon (OR)'},
  {name: 'Pennsylvania (PA)'},
  {name: 'Rhode Island (RI)'},
  {name: 'South Carolina (SC)'},
  {name: 'South Dakota (SD)'},
  {name: 'Tennessee (TN)'},
  {name: 'Texas (TX)'},
  {name: 'Utah (UT)'},
  {name: 'Vermont (VT)'},
  {name: 'Virginia (VA)'},
  {name: 'Washington (WA)'},
  {name: 'West Virginia (WV)'},
  {name: 'Wisconsin (WI)'},
  {name: 'Wyoming (WY)'},
  {name: 'American Samoa (AS)'},
  {name: 'Guam (GU)'},
  {name: 'Northern Mariana Islands (MP)'},
  {name: 'Puerto Rico (PR)'},
  {name: 'Virgin Islands (VI)'}, ];
  filteredOptions: Observable<User[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }
}
