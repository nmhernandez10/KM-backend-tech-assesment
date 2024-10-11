import assert from 'node:assert';
import { describe, it } from 'node:test';
import axios from 'axios';

const BASE_URL = 'http://localhost:3000'

describe('simple', () => {
    it('should work', () => {
        assert.strictEqual(1, 1);
    });

    it('should be KM Technical Assessment', async () => {
        const response = await axios.get(`${BASE_URL}/`);
        assert.strictEqual(response.data, "KM Technical Assessment");
    });

    describe('Technical Assessment Tests', () => {
    });
});