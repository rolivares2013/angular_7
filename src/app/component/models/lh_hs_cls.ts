

/**
 * A model for an individual corporate employee
 */
export class Lh_hs_cls {
  
    id:number;
    TitleContext: string ; 
    DescriptionContext:    string ; 
    CriticalityComment:    string ; 
    LikelihoodId :  number ; 
    CriticalityLevelId :  number ; 
    EquipmentId :  number ; 
    WorkshopId :  number ; 
    FinancialId :  number ; 
    HealthfactorId :  number ; 
    EnvironmentId :  number ; 
    LegalId :  number ; 
    ReputationId :  number ; 
    CommunityId :  number ; 




    constructor(id: number, TitleContext: string, DescriptionContext: string, CriticalityComment: string, LikelihoodId :number, 
        CriticalityLevelId :number,FinancialId :number,EquipmentId :number,WorkshopId :number,HealthfactorId :number,EnvironmentId :number,
        LegalId :number,ReputationId :number,CommunityId :number){
        this.id =  id ;
        this.TitleContext = TitleContext;
        this.DescriptionContext = DescriptionContext;
        this.CriticalityComment = CriticalityComment;
        this.LikelihoodId = LikelihoodId;
        this.CriticalityLevelId = CriticalityLevelId;
        this.FinancialId = FinancialId;
        this.EquipmentId = EquipmentId; 
        this.WorkshopId = WorkshopId; 
        this.HealthfactorId = HealthfactorId;
        this.EnvironmentId = EnvironmentId;
        this.LegalId = LegalId;
        this.ReputationId = ReputationId;
        this.CommunityId = CommunityId;
    }
}