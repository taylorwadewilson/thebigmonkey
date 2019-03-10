import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Golfer } from '../golfer';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    
    apiURL: string = 'localhost:3000';

    constructor(private httpClient: HttpClient) {

    }

    public getGolfers(url?: string) {
        console.log('sending request to ' + `${this.apiURL}/golfers`);
        return this.httpClient.get<Golfer[]>(`${this.apiURL}/golfers`);
    }

    public createGolfer(golfer: Golfer)
    {

    }
}