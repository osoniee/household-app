abstract class DomainClass {
    id = '';
    registrationTime = 0;
    modificationTime = 0;
    modifierId = '';

    protected constructor(domainClass?: DomainClass) {
        if (domainClass) {
            this.id = domainClass.id;
            this.registrationTime = domainClass.registrationTime;
            this.modificationTime = domainClass.modificationTime;
            this.modifierId = domainClass.modifierId;
        }
    }

    applyDomainProperties(domainClass: DomainClass) {
        this.id = domainClass.id;
        this.registrationTime = domainClass.registrationTime;
        this.modificationTime = domainClass.modificationTime;
        this.modifierId = domainClass.modifierId;
    }
    abstract serialize(): string;
}

export default DomainClass;
