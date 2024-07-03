import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.componet";

@NgModule({
    declarations:[CardComponent],
    exports:[CardComponent]


})

export class SharedModule{}