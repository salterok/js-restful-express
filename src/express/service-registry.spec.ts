import { ExpressServiceRegistry } from './service-registry';
import { JsRestfulRegistry } from './registry';
import * as express from 'express';
import {expect} from 'chai';
import { Factory } from './test-util.spec';

class TestServiceC {

}

describe('service-registry', () => {

    var app;

    beforeEach(()=>{
        app = express();
    });

    it('should be possible to register an object', () => {

        var fn = () => {
            ExpressServiceRegistry.registerService(app, new TestServiceC());
        }

        expect(fn).to.not.throw(Error);
    })

    it('should be possible to register a SecurityContextFactory', () => {

        var fn = () => {
            ExpressServiceRegistry.registerSecurityContextFactory(app, new Factory());
        }

        expect(fn).to.not.throw(Error);
    })

});