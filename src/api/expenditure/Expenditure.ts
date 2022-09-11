import DomainClass from "../abstracts/DomainClass";
import {ExpenditureMethodType} from "./types";

class Expenditure extends DomainClass {
    discountRate = 0;
    installmentPlan = 0;
    expenditureDate = 0;
    principal = 0;

    expenditureMethod: ExpenditureMethodType;
    expenditureCategoryRootId: string;
    expenditureCategoryPath: string;
    additionalNote = '';

    constructor(method: ExpenditureMethodType, categoryId: string, categoryPath: string, principal: number, additionalNode = '') {
        super();
        this.principal = principal;
        this.expenditureMethod = method;
        this.expenditureCategoryRootId = categoryId;
        this.expenditureCategoryPath = categoryPath;
        this.additionalNote = additionalNode;
    }

    static new() {
        return new Expenditure('', '', '', 0, '');
    }

    serialize() {
        return JSON.stringify(this);
    }

}
export default Expenditure;
