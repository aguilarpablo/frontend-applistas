import ApiService from './ApiService'

class ExplotacionesService extends ApiService {
  EXPLOTACIONES_RESOURCE = 'explotaciones'

  getEndpoint () {
    return this.EXPLOTACIONES_RESOURCE
  }
}

export default ExplotacionesService
