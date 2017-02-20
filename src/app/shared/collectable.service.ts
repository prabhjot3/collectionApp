import{Collectable} from "./collectable.model";


export class CollectableService{
  private collectables:Collectable[]=[
                      {description:'Add a Book',type:'book'},
                      {description:'Add a Mobile',type:'mobile'},
                      {description:'Add a Laptop',type:'laptop'},
                      {description:'Add a Tablet',type:'tab'}
                    ];
private collection:Collectable[]=[];
                      getCollectables()
                      {
                        return this.collectables;
                      }


                    }
