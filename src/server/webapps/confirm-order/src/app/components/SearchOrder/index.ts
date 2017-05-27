import { Component, OnInit } from '@angular/core';
import { UIRouter } from 'ui-router-ng2';
import { ResourcesService } from "../../shared/services/Resources";

@Component({
    selector: 'search-order',
    styles: [require('./styles.styl').toString()],
    template: require('./template.pug')(),
})

export class SearchOrderComponent implements OnInit {

    // Attributes
        billId; String;
        router: UIRouter;
        resources: ResourcesService;

    // Methods
        constructor (resources: ResourcesService, router: UIRouter) {
            this.resources = resources;
            this.router = router;
            this.billId = '';
        }

        ngOnInit () {
        }

        searchBill () {
            this.resources.getBill(this.billId).subscribe(
                (data) => {
                    if (data) {
                        this.router.stateService.go('confirm', {
                            billId: this.billId
                        });
                    }
                },
                (err) => {
                    alert("Bill not found");
                    console.log(err);
                }
            )
        }

}
