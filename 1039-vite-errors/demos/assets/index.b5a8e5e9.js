import{eR as s,eV as r,eU as o}from"./main.eb3bf376.js";import d from"./screen.78181b8e.js";class i extends s{openMetadata(t){this.$iApi.panel.open({id:"metadata",props:{payload:t}})}}var l={en:{"metadata.title":"Metadata","metadata.xslt.Abstract":"Abstract","metadata.xslt.Scope":"Scope","metadata.xslt.hereBeScope":"here be scope","metadata.xslt.timePeriod":"Time Period","metadata.xslt.supplementalData":"Supplemental Data","metadata.xslt.contactInfo":"Contact Information","metadata.xslt.resourceProvider":"Resource Provider","metadata.xslt.custodian":"Custodian","metadata.xslt.owner":"Owner","metadata.xslt.user":"User","metadata.xslt.distributor":"Distributor","metadata.xslt.originator":"Originator","metadata.xslt.pointOfContact":"Point of Contact","metadata.xslt.principalInvestigator":"Principal Investigator","metadata.xslt.processor":"Processor","metadata.xslt.publisher":"Publisher","metadata.xslt.author":"Author","metadata.xslt.collaborator":"Collaborator","metadata.xslt.editor":"Editor","metadata.xslt.mediator":"Mediator","metadata.xslt.rightsHolder":"Rights Holder","metadata.xslt.cataloguePage":"Data Catalogue Page","metadata.xslt.metadataPage":"Raw Metadata","metadata.xslt.metadata":"Metadata"},fr:{"metadata.title":"M\xE9tadonn\xE9es","metadata.xslt.Abstract":"R\xE9sum\xE9","metadata.xslt.Scope":"Port\xE9e","metadata.xslt.hereBeScope":"la port\xE9e jusqu'ici","metadata.xslt.timePeriod":"P\xE9riode","metadata.xslt.supplementalData":"Donn\xE9es suppl\xE9mentaires","metadata.xslt.contactInfo":"Coordonn\xE9es","metadata.xslt.resourceProvider":"Fournisseur de la ressource","metadata.xslt.custodian":"D\xE9positaire","metadata.xslt.owner":"Propri\xE9taire","metadata.xslt.user":"Utilisateur","metadata.xslt.distributor":"Distributeur","metadata.xslt.originator":"Auteur","metadata.xslt.pointOfContact":"Point de contact","metadata.xslt.principalInvestigator":"Chercheur principal","metadata.xslt.processor":"Pr\xE9parateur","metadata.xslt.publisher":"\xC9diteur","metadata.xslt.author":"Auteur","metadata.xslt.collaborator":"Collaborateur","metadata.xslt.editor":"\xC9diteur","metadata.xslt.mediator":"M\xE9diateur","metadata.xslt.rightsHolder":"Titulaire des droits","metadata.xslt.cataloguePage":"Page des donn\xE9es du catalogue","metadata.xslt.metadataPage":"M\xE9tadonn\xE9es brutes","metadata.xslt.metadata":"M\xE9tadonn\xE9es"}};class x extends i{async added(){this.$iApi.panel.register({metadata:{screens:{"metadata-screen-content":r(d)},style:{width:"350px"},button:{tooltip:"metadata.title",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" /></svg>'},alertName:"metadata.title"}},{i18n:{messages:l}});let t=this.$iApi.event.on(o.METADATA_OPEN,e=>{this.$iApi.fixture.get("metadata").openMetadata(e)});this.removed=()=>{console.log(`[fixture] ${this.id} removed`),this.$iApi.fixture.get("appbar")&&this.$iApi.$vApp.$store.dispatch("appbar/removeButton","metadata"),this.$iApi.event.off(t),this.$iApi.panel.remove("metadata")}}}export{x as default};
