import {ExpenditureMethodType} from "./types";
import Expenditure from "./Expenditure";

class ExpenditureRecord extends Expenditure {
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
}

export default ExpenditureRecord;
