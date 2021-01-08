/**
 * Quick function to send HTTP requests to an external address
 *
 * @param url URL to send request to
 * @param method HTTP method (GET by default)
 * @param headers Headers to add to request, as a JSON with key/value pairs per each header
 * @param body Body to add to request, as a JSON object
 *
 */
export async function sendRequest(
	url: string,
	method?: string,
	headers?: any,
	body?: any
  ) {

	try {

		let propsObject = {
			method: method? method: 'GET',
		}

		if(headers){
			propsObject[`headers`] = headers
		}

		if(body){
			propsObject[`body`] = JSON.stringify(body)
		}

		let response = await fetch(url, propsObject )
		let json = await response.json()
		//log(json)
		return json
	  } catch (error) {
		log('error fetching from ', url, error)
	  }
	}
